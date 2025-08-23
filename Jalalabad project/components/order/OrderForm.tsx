'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Phone } from 'lucide-react';

const menuItems = [
  {
    id: '1',
    name: 'Jalalabad Special Mutton Curry',
    price: 299,
    description: 'Our signature slow-cooked mutton curry with aromatic spices'
  },
  {
    id: '2',
    name: 'Punjabi Mutton Karahi',
    price: 329,
    description: 'Traditional karahi-style mutton with bell peppers'
  },
  {
    id: '3',
    name: 'Mutton Rogan Josh',
    price: 349,
    description: 'Rich and flavorful mutton curry with Kashmiri spices'
  }
];

export default function OrderForm() {
  const searchParams = useSearchParams();
  const selectedItemId = searchParams.get('item');
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Jalalabad',
    selectedItem: selectedItemId || '',
    quantity: '1',
    specialInstructions: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedItem = menuItems.find(item => item.id === formData.selectedItem);
  const totalAmount = selectedItem ? selectedItem.price * parseInt(formData.quantity) : 0;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateOrderId = () => {
    const prefix = 'JM';
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    return `${prefix}${timestamp}${random}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      const orderId = generateOrderId();
      
      // Store order in localStorage for tracking
      const orderData = {
        orderId,
        ...formData,
        selectedItemName: selectedItem?.name,
        totalAmount,
        status: 'Order Started',
        orderTime: new Date().toISOString(),
        estimatedDelivery: new Date(Date.now() + 45 * 60000).toISOString() // 45 minutes
      };

      localStorage.setItem(`order_${orderId}`, JSON.stringify(orderData));

      toast({
        title: "Order Placed Successfully!",
        description: `Your order ID is ${orderId}. You will receive updates via SMS and email.`,
      });

      // Redirect to tracking page
      window.location.href = `/track?id=${orderId}`;

    } catch (error) {
      toast({
        title: "Order Failed",
        description: "There was an error placing your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.customerName && formData.phone && formData.address && formData.selectedItem;

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Order Form */}
      <div className="lg:col-span-2">
        <Card className="border-2 border-amber-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-red-900 to-amber-700 text-white">
            <CardTitle className="font-playfair text-2xl">Place Your Order</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="customerName" className="text-red-900 font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="customerName"
                    type="text"
                    value={formData.customerName}
                    onChange={(e) => handleInputChange('customerName', e.target.value)}
                    className="border-amber-300 focus:border-red-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-red-900 font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="border-amber-300 focus:border-red-500"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-red-900 font-medium">
                  Email (Optional)
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="border-amber-300 focus:border-red-500"
                />
              </div>

              {/* Delivery Address */}
              <div>
                <Label htmlFor="address" className="text-red-900 font-medium">
                  Delivery Address *
                </Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="border-amber-300 focus:border-red-500"
                  rows={3}
                  required
                />
              </div>

              <div>
                <Label htmlFor="city" className="text-red-900 font-medium">
                  City
                </Label>
                <Select value={formData.city} onValueChange={(value) => handleInputChange('city', value)}>
                  <SelectTrigger className="border-amber-300 focus:border-red-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Jalalabad">Jalalabad</SelectItem>
                    <SelectItem value="Fazilka">Fazilka</SelectItem>
                    <SelectItem value="Ferozepur">Ferozepur</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Order Details */}
              <div className="border-t border-amber-200 pt-6">
                <h3 className="font-playfair text-xl font-bold text-red-900 mb-4">Order Details</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="selectedItem" className="text-red-900 font-medium">
                      Select Dish *
                    </Label>
                    <Select value={formData.selectedItem} onValueChange={(value) => handleInputChange('selectedItem', value)}>
                      <SelectTrigger className="border-amber-300 focus:border-red-500">
                        <SelectValue placeholder="Choose a dish" />
                      </SelectTrigger>
                      <SelectContent>
                        {menuItems.map((item) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.name} - ₹{item.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="quantity" className="text-red-900 font-medium">
                      Quantity
                    </Label>
                    <Select value={formData.quantity} onValueChange={(value) => handleInputChange('quantity', value)}>
                      <SelectTrigger className="border-amber-300 focus:border-red-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="specialInstructions" className="text-red-900 font-medium">
                  Special Instructions (Optional)
                </Label>
                <Textarea
                  id="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                  className="border-amber-300 focus:border-red-500"
                  rows={2}
                  placeholder="Any special requests or dietary requirements..."
                />
              </div>

              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full bg-red-900 hover:bg-red-800 text-amber-100 font-bold py-3 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                {isSubmitting ? 'Placing Order...' : `Place Order - ₹${totalAmount}`}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Order Summary & Info */}
      <div className="space-y-6">
        {/* Order Summary */}
        <Card className="border-2 border-amber-200 shadow-lg">
          <CardHeader className="bg-amber-100">
            <CardTitle className="text-red-900 font-playfair">Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {selectedItem ? (
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-900">{selectedItem.name}</h4>
                  <p className="text-sm text-gray-600">{selectedItem.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span>₹{selectedItem.price} × {formData.quantity}</span>
                    <span className="font-bold">₹{totalAmount}</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between items-center font-bold text-red-900">
                    <span>Total Amount:</span>
                    <span className="text-xl">₹{totalAmount}</span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">
                Please select a dish to see order summary
              </p>
            )}
          </CardContent>
        </Card>

        {/* Restaurant Info */}
        <Card className="border-2 border-amber-200 shadow-lg">
          <CardHeader className="bg-amber-100">
            <CardTitle className="text-red-900 font-playfair">Restaurant Info</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-red-700 mt-0.5" />
              <div>
                <p className="font-medium text-red-900">Location</p>
                <p className="text-sm text-gray-600">Main Market Street, Jalalabad, Punjab</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-red-700 mt-0.5" />
              <div>
                <p className="font-medium text-red-900">Delivery Time</p>
                <p className="text-sm text-gray-600">30-45 minutes</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-red-700 mt-0.5" />
              <div>
                <p className="font-medium text-red-900">Contact</p>
                <p className="text-sm text-gray-600">+91-XXXXXXXXXX</p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-3 mt-4">
              <Badge className="bg-green-600 text-white mb-2">Free Delivery</Badge>
              <p className="text-xs text-gray-600">
                Free delivery on all orders within Jalalabad city limits
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}