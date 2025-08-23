'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Truck, Package, MapPin } from 'lucide-react';

interface OrderStatus {
  orderId: string;
  customerName: string;
  selectedItemName: string;
  quantity: string;
  totalAmount: number;
  status: string;
  orderTime: string;
  estimatedDelivery: string;
  address: string;
  phone: string;
}

const orderStages = [
  {
    name: 'Order Started',
    description: 'Your order has been received and is being prepared',
    icon: Package
  },
  {
    name: 'Out for Delivery',
    description: 'Your delicious mutton dish is on its way',
    icon: Truck
  },
  {
    name: 'Delivered',
    description: 'Order delivered to your location',
    icon: MapPin
  },
  {
    name: 'Received',
    description: 'Order confirmed as received by customer',
    icon: CheckCircle
  }
];

export default function OrderTracker() {
  const searchParams = useSearchParams();
  const orderIdFromUrl = searchParams.get('id');
  
  const [orderId, setOrderId] = useState(orderIdFromUrl || '');
  const [orderData, setOrderData] = useState<OrderStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const trackOrder = () => {
    setLoading(true);
    setError('');
    
    try {
      const storedOrder = localStorage.getItem(`order_${orderId}`);
      if (storedOrder) {
        const order = JSON.parse(storedOrder);
        setOrderData(order);
      } else {
        setError('Order not found. Please check your order ID.');
      }
    } catch (error) {
      setError('Error fetching order details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (orderIdFromUrl) {
      trackOrder();
    }
  }, [orderIdFromUrl]);

  // Simulate order status progression
  useEffect(() => {
    if (orderData) {
      const interval = setInterval(() => {
        const currentStatus = orderData.status;
        const currentIndex = orderStages.findIndex(stage => stage.name === currentStatus);
        
        if (currentIndex < orderStages.length - 1) {
          const nextStage = orderStages[currentIndex + 1];
          const updatedOrder = { ...orderData, status: nextStage.name };
          
          localStorage.setItem(`order_${orderData.orderId}`, JSON.stringify(updatedOrder));
          setOrderData(updatedOrder);
        } else {
          clearInterval(interval);
        }
      }, 30000); // Update every 30 seconds

      return () => clearInterval(interval);
    }
  }, [orderData?.status]);

  const getCurrentStageIndex = () => {
    if (!orderData) return -1;
    return orderStages.findIndex(stage => stage.name === orderData.status);
  };

  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const currentStageIndex = getCurrentStageIndex();

  return (
    <div className="space-y-6">
      {/* Order ID Input */}
      {!orderIdFromUrl && (
        <Card className="border-2 border-amber-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-red-900 font-playfair">Enter Order ID</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Input
              placeholder="Enter your order ID (e.g., JM123456)"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value.toUpperCase())}
              className="border-amber-300 focus:border-red-500"
            />
            <Button
              onClick={trackOrder}
              disabled={!orderId || loading}
              className="bg-red-900 hover:bg-red-800 text-amber-100 px-8"
            >
              {loading ? 'Tracking...' : 'Track Order'}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Error Message */}
      {error && (
        <Card className="border-2 border-red-200 bg-red-50">
          <CardContent className="p-6 text-center text-red-700">
            {error}
          </CardContent>
        </Card>
      )}

      {/* Order Details */}
      {orderData && (
        <>
          <Card className="border-2 border-amber-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-900 to-amber-700 text-white">
              <div className="flex justify-between items-center">
                <CardTitle className="font-playfair text-2xl">Order #{orderData.orderId}</CardTitle>
                <Badge className={`
                  ${currentStageIndex === 0 ? 'bg-yellow-500' : ''}
                  ${currentStageIndex === 1 ? 'bg-blue-500' : ''}
                  ${currentStageIndex === 2 ? 'bg-green-500' : ''}
                  ${currentStageIndex === 3 ? 'bg-green-600' : ''}
                  text-white font-medium px-3 py-1
                `}>
                  {orderData.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-red-900 mb-2">Order Details</h3>
                  <p><span className="font-medium">Dish:</span> {orderData.selectedItemName}</p>
                  <p><span className="font-medium">Quantity:</span> {orderData.quantity}</p>
                  <p><span className="font-medium">Total:</span> ₹{orderData.totalAmount}</p>
                  <p><span className="font-medium">Customer:</span> {orderData.customerName}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-red-900 mb-2">Timing</h3>
                  <p><span className="font-medium">Ordered:</span> {formatTime(orderData.orderTime)}</p>
                  <p><span className="font-medium">Est. Delivery:</span> {formatTime(orderData.estimatedDelivery)}</p>
                  <div className="mt-2 p-2 bg-amber-50 rounded">
                    <p className="text-sm text-gray-600">
                      <MapPin className="h-4 w-4 inline mr-1" />
                      {orderData.address}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Progress */}
          <Card className="border-2 border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-red-900 font-playfair">Order Progress</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="relative">
                {orderStages.map((stage, index) => {
                  const StageIcon = stage.icon;
                  const isCompleted = index <= currentStageIndex;
                  const isCurrent = index === currentStageIndex;
                  
                  return (
                    <div key={stage.name} className="flex items-center mb-8 last:mb-0">
                      {/* Connector Line */}
                      {index < orderStages.length - 1 && (
                        <div
                          className={`absolute left-6 w-0.5 h-16 top-12 transform translate-y-2 ${
                            isCompleted ? 'bg-green-500' : 'bg-gray-300'
                          }`}
                          style={{ top: `${index * 96 + 48}px` }}
                        />
                      )}
                      
                      {/* Icon */}
                      <div
                        className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-4 ${
                          isCompleted
                            ? 'bg-green-500 border-green-500 text-white'
                            : isCurrent
                            ? 'bg-yellow-500 border-yellow-500 text-white animate-pulse'
                            : 'bg-gray-100 border-gray-300 text-gray-400'
                        }`}
                      >
                        <StageIcon className="h-6 w-6" />
                      </div>
                      
                      {/* Content */}
                      <div className="ml-6">
                        <h3
                          className={`font-semibold ${
                            isCompleted ? 'text-green-700' : isCurrent ? 'text-yellow-700' : 'text-gray-500'
                          }`}
                        >
                          {stage.name}
                        </h3>
                        <p
                          className={`text-sm ${
                            isCompleted ? 'text-green-600' : isCurrent ? 'text-yellow-600' : 'text-gray-400'
                          }`}
                        >
                          {stage.description}
                        </p>
                        {isCurrent && (
                          <div className="flex items-center mt-2">
                            <Clock className="h-4 w-4 text-yellow-600 mr-1" />
                            <span className="text-sm text-yellow-600 font-medium">In Progress</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="border-2 border-amber-200 shadow-lg bg-amber-50">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-red-900 mb-2">Need Help?</h3>
              <p className="text-gray-700 mb-4">
                Contact us if you have any questions about your order
              </p>
              <div className="flex justify-center space-x-6 text-sm">
                <div className="flex items-center">
                  <span className="font-medium">Phone:</span>
                  <span className="ml-1">+91-XXXXXXXXXX</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">Order ID:</span>
                  <span className="ml-1 font-mono">{orderData.orderId}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}