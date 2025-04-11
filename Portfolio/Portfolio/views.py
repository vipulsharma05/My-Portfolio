from django.core.mail import EmailMessage
from django.contrib import messages
from django.shortcuts import render,redirect
from django.http import HttpResponse # not use currently
from ContactMessage.models import ContactMessage


def home(request):
    return render(request,'websites/home.html')



# # views.py
def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')  # user's email
        subject = request.POST.get('subject', 'No Subject')
        message = request.POST.get('message')

        # 1. Save to database
        ContactMessage.objects.create(
            name=name,
            email=email,
            subject=subject,
            message=message
        )

        
        # Create the email content
        body = f"""
        📬 New Portfolio Contact:

        👤 Name: {name}
        📧 Email: {email}
        📝 Message:
        {message}
        """

        try:
            mail = EmailMessage(
                subject=f"Portfolio Contact - {subject}",
                body=body,
                from_email='vipulsharma5002@gmail.com',          # ✅ Keep this your email
                to=['vipulsharma5002@gmail.com'],                # ✅ You'll receive it here
                reply_to=[email]                                 # ✅ So reply goes to user
            )
            mail.send(fail_silently=False)

            messages.success(request, "✅ Your message has been sent!")
        except Exception as e:
            print("EMAIL ERROR:", e)
            messages.error(request, "❌ Something went wrong. Please try again later.")

        return redirect('home')  # Adjust if you use a different name in urls.py

    return redirect('home')  # 👈 only if your contact URL is named 'contact'

