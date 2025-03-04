data "terraform_remote_state" "network" {
  backend = "s3"
  config = {
    bucket = "tech-challenge-tf-state-bucket"
    key    = "network/terraform.tfstate"
    region = "us-west-2"
  }
}

data "terraform_remote_state" "app" {
  backend = "s3"
  config = {
    bucket = "tech-challenge-tf-state-bucket"
    key    = "app/terraform.tfstate"
    region = "us-west-2"
  }
}

data "aws_iam_role" "default" {
  name = "LabRole"
}