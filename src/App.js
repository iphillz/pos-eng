function App() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    try {
      await fetch('https://n8n.saastify.co/webhook/dcea7bf8-c22c-4e6f-8643-7bed4eab4ba5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      // Show thank you message
      alert('Thank you for your submission!');
      event.target.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
    </form>
  );
} 