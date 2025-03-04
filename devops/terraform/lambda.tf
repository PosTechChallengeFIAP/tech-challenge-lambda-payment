resource "aws_lambda_function" "my_lambda" {
  function_name    = "payment_lambda"
  filename         = "lambda.zip"
  source_code_hash = filebase64sha256("lambda.zip")
  role             = data.aws_iam_role.default.arn
  handler          = "dist/index.handler"
  runtime          = "nodejs18.x"

  vpc_config {
    subnet_ids         = [data.terraform_remote_state.network.app_public_subnet_id]
    security_group_ids = [data.terraform_remote_state.network.payment_sg_id]
  }

  environment {
    variables = {
      SQS_URL = aws_sqs_queue.payment_queue.url
    }
  }
}