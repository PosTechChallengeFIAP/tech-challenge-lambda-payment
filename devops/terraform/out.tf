output "sqs_queue_arn" {
  value = aws_sqs_queue.payment_queue.arn
}