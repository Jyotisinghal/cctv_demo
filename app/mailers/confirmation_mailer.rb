class ConfirmationMailer < ApplicationMailer
	def send_welcome_mail(customer)
		mail(to:customer.email,from:"smarttechno.vishal@gmail.com",subject:"confirmation",message:"")
	end
end
