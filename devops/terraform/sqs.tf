resource "aws_sqs_queue" "payment_queue" {
  name = "payment-sqs-queue"
}