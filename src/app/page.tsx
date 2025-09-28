'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Users, Award } from 'lucide-react';

export default function PetWebsite() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="w-full px-6 py-4 border-b border-border">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">PETALUX</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">HOME</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">BREEDS</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">ADOPTION</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">GROOMING</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">TRAINING</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">CONTACT</a>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">LOGIN</Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">JOIN NOW</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                FIND YOUR<br />
                <span className="text-primary">FUR-EVER</span><br />
                FRIEND
              </h1>
            </div>
            <div className="flex-1 flex justify-center items-center space-x-4 md:space-x-8">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20 hover:border-primary transition-all duration-300">
                  <Image
                    src="/generated/golden-retriever-hero.png"
                    alt="Golden Retriever"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 hover:border-primary transition-all duration-300">
                  <Image
                    src="/generated/siamese-cat-hero.png"
                    alt="Siamese Cat"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20 hover:border-primary transition-all duration-300">
                  <Image
                    src="/generated/black-cat-hero.png"
                    alt="Black Cat"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Breeds Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">EXPLORE BREEDS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'MAINE COON', image: '/generated/maine-coon-breed.png' },
              { name: 'WELSH CORGI', image: '/generated/welsh-corgi-breed.png' },
              { name: 'BEAGLE', image: '/generated/beagle-breed.png' },
              { name: 'PET ADOPTION', image: '/generated/black-cat-hero.png' }
            ].map((breed, index) => (
              <Card key={index} className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 cursor-pointer">
                <div className="aspect-square relative">
                  <Image
                    src={breed.image}
                    alt={breed.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-semibold text-sm">{breed.name}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-8 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">PROFESSIONAL</h3>
                <p className="text-muted-foreground text-sm">Expert pet care and grooming services for your beloved companions</p>
              </div>
            </Card>
            <Card className="p-8 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">POSITIVE TRAINING</h3>
                <p className="text-muted-foreground text-sm">Effective and compassionate training methods for all pets</p>
              </div>
            </Card>
            <Card className="p-8 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">PET ADOPTION</h3>
                <p className="text-muted-foreground text-sm">Find your perfect companion through our adoption program</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer / Community Section */}
      <footer className="px-6 py-16 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg w-full md:w-auto">
                JOIN OUR COMMUNITY
              </Button>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <span className="text-muted-foreground text-sm text-center">© 2024 PETALUX. ALL RIGHTS RESERVED</span>
              <div className="flex space-x-4">
                {['f', 't', 'i', 'y'].map((social, index) => (
                  <div key={index} className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer">
                    <span className="text-xs font-bold">{social}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}