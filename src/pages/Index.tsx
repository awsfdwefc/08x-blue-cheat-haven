import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, ShoppingCart, User } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-secondary/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">08x Cheats Shop</div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">Products</a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">About</a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Premium Gaming Cheats</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Enhance your gaming experience with our professional, undetected cheats
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            Browse Products
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Aimbot Pro", price: "$29.99", features: ["Smooth targeting", "Customizable FOV", "Undetected"] },
              { title: "ESP Master", price: "$24.99", features: ["Player ESP", "Item ESP", "Radar Hack"] },
              { title: "Premium Bundle", price: "$49.99", features: ["All features", "Priority support", "Lifetime access"] },
            ].map((product, index) => (
              <Card key={index} className="bg-secondary/40 backdrop-blur-sm border-primary/20 p-6 hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-4">{product.title}</h3>
                <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
                <ul className="text-gray-400 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="mb-2">• {feature}</li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Purchase Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="h-12 w-12 text-primary" />, title: "24/7 Support", description: "Round-the-clock customer support for all your needs" },
              { icon: <ShoppingCart className="h-12 w-12 text-primary" />, title: "Instant Delivery", description: "Get access to your products immediately after purchase" },
              { icon: <User className="h-12 w-12 text-primary" />, title: "Regular Updates", description: "Stay ahead with our frequent product updates" },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/80 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">08x Cheats Shop</h3>
              <p className="text-gray-400">Premium gaming solutions for enthusiasts</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary">Aimbot</a></li>
                <li><a href="#" className="hover:text-primary">ESP</a></li>
                <li><a href="#" className="hover:text-primary">Bundles</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary">FAQ</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
                <li><a href="#" className="hover:text-primary">Discord</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary">Terms</a></li>
                <li><a href="#" className="hover:text-primary">Privacy</a></li>
                <li><a href="#" className="hover:text-primary">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 08x Cheats Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;