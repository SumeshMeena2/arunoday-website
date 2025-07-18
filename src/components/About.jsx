import { Target, Users, Lightbulb, Trophy } from 'lucide-react';
import { Card, CardContent } from './ui/Card.jsx';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Mission",
      description: "To foster entrepreneurial spirit and innovation among students, creating tomorrow's business leaders."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a vibrant ecosystem of entrepreneurs, mentors, and industry experts working together."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Encouraging creative thinking and breakthrough solutions to real-world problems."
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Striving for excellence in all our endeavors and celebrating entrepreneurial achievements."
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About <span className="text-gold">E-Cell MANIT</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The Entrepreneurship Cell at MANIT Bhopal is a student-driven organization dedicated to 
            promoting entrepreneurship and innovation. We provide a platform for budding entrepreneurs 
            to learn, network, and transform their ideas into successful ventures.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "500+", label: "Active Members" },
            { number: "50+", label: "Events Organized" },
            { number: "100+", label: "Startups Mentored" },
            { number: "25+", label: "Industry Partners" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-card-gradient rounded-2xl p-8 max-w-4xl mx-auto border border-border">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Entrepreneurial Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our community of innovators and transform your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold text-gold-foreground px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all duration-300 hover:scale-105">
                Become a Member
              </button>
              <button className="border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-gold-foreground transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default About;