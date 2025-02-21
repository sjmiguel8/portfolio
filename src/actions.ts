export async function submitContactForm(formData: FormData) {
  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Here you would typically make an API call to your backend
  // For now, we'll just log the data
  console.log("Form submission:", { name, email, message });

  // Return a success message
  return {
    message: "Thanks for your message! I'll get back to you soon.",
  };
}
