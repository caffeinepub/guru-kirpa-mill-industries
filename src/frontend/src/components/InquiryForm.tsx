import { useState } from 'react';
import { useSubmitInquiry } from '../hooks/useSubmitInquiry';
import { Loader2, CheckCircle } from 'lucide-react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const { mutate: submitInquiry, isPending, isError, error } = useSubmitInquiry();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const subject = `Inquiry from ${formData.name}${formData.company ? ` (${formData.company})` : ''}`;
    const message = `
Name: ${formData.name}
${formData.company ? `Company: ${formData.company}\n` : ''}Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}\n` : ''}
Message:
${formData.message}
    `.trim();

    submitInquiry(
      {
        email: formData.email,
        subject,
        message,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            message: '',
          });
          setErrors({});
        },
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-xl border-2 border-accent/50 bg-accent/5 text-center">
        <CheckCircle className="text-accent mx-auto mb-4" size={48} />
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-4">
          Your inquiry has been submitted successfully. We'll get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isError && (
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
          {error?.message || 'Failed to submit inquiry. Please try again.'}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border-2 bg-background transition-colors ${
            errors.name ? 'border-destructive' : 'border-border focus:border-accent'
          } focus:outline-none`}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company <span className="text-muted-foreground text-xs">(Optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-accent bg-background transition-colors focus:outline-none"
          placeholder="Your company name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email <span className="text-destructive">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border-2 bg-background transition-colors ${
            errors.email ? 'border-destructive' : 'border-border focus:border-accent'
          } focus:outline-none`}
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone <span className="text-muted-foreground text-xs">(Optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-accent bg-background transition-colors focus:outline-none"
          placeholder="+91 123 456 7890"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border-2 bg-background transition-colors resize-none ${
            errors.message ? 'border-destructive' : 'border-border focus:border-accent'
          } focus:outline-none`}
          placeholder="Tell us about your requirements..."
        />
        {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full px-6 py-4 text-base font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isPending ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Submitting...
          </>
        ) : (
          'Submit Inquiry'
        )}
      </button>
    </form>
  );
}
