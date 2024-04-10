
from django.core.mail import send_mail
from django.conf import settings
def send_email_notifications():
    subject = "Loan Repayment"
    message = "Loan Due with amount 4806"
    from_email = settings.EMAIL_HOST_USER
    recipient_list = ["atharvamohite8902@gmail.com"]
    send_mail(subject,message,from_email,recipient_list)

