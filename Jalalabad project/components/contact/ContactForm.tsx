'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again later or contact us directly by phone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <Card className="border-2 border-amber-200 shadow-lg">
      <CardHeader className="bg-amber-100">
        <CardTitle className="text-red-900 font-playfair text-2xl">Send us a Message</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-red-900 font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="border-amber-300 focus:border-red-500"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-red-900 font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="border-amber-300 focus:border-red-500"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone" className="text-red-900 font-medium">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="border-amber-300 focus:border-red-500"
            />
          </div>

          <div>
            <Label htmlFor="subject" className="text-red-900 font-medium">
              Subject
            </Label>
            <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
              <SelectTrigger className="border-amber-300 focus:border-red-500">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="order">Order Related</SelectItem>
                <SelectItem value="feedback">Feedback</SelectItem>
                <SelectItem value="catering">Catering Services</SelectItem>
                <SelectItem value="complaint">Complaint</SelectItem>
                <SelectItem value="suggestion">Suggestion</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message" className="text-red-900 font-medium">
              Message *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="border-amber-300 focus:border-red-500"
              rows={5}
              placeholder="Please share your message, feedback, or inquiry..."
              required
            />
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-900 mb-2">Quick Response Times:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• General inquiries: Within 24 hours</li>
              <li>• Order issues: Within 2 hours</li>
              <li>• Urgent matters: Call us directly</li>
            </ul>
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full bg-red-900 hover:bg-red-800 text-amber-100 font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}