import { Leaf, Shield, Heart, Award } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Natural Ingredients',
      description: 'We source the finest natural ingredients, following ancient Ayurvedic traditions.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assured',
      description: 'Every product undergoes rigorous testing to ensure the highest quality standards.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Customer First',
      description: 'Your satisfaction and well-being are at the heart of everything we do.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certified Products',
      description: 'All our products are certified by leading regulatory bodies.'
    }
  ];

  const colors = {
    blackOlive: '#3B3C36',
    paleSilver: '#C9C0BB',
    chestnut: '#954535',
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative h-96 mb-16">
        <img 
          src="/api/placeholder/1920/600" 
          alt="About Us" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blackOlive/50" style={{ backgroundColor: `${colors.blackOlive}80` }} />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h1>
            <p className="text-lg text-white/90">
              Bringing the wisdom of Ayurveda to modern beauty care
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ color: colors.blackOlive }}>
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            At 5ELM, we&apos;re committed to bringing the ancient wisdom of Ayurveda to modern beauty care.
            Our products are crafted with respect for tradition while embracing contemporary scientific understanding.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-paleSilver/10 p-6 rounded-lg" style={{ backgroundColor: `${colors.paleSilver}10` }}>
              <h3 className="font-semibold mb-3">Vision</h3>
              <p>To be the leading provider of authentic Ayurvedic beauty solutions worldwide.</p>
            </div>
            <div className="bg-paleSilver/10 p-6 rounded-lg" style={{ backgroundColor: `${colors.paleSilver}10` }}>
              <h3 className="font-semibold mb-3">Values</h3>
              <p>Commitment to quality, sustainability, and customer well-being.</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: colors.blackOlive }}>
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
                style={{ backgroundColor: `${colors.paleSilver}10` }}
              >
                <div className="inline-block p-4 rounded-full mb-4" style={{ color: colors.chestnut }}>
                  {value.icon}
                </div>
                <h3 className="font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: colors.blackOlive }}>
            Our Journey
          </h2>
          <div className="space-y-8">
            {/* Add timeline items here */}
            <div className="flex items-center gap-4">
              <div className="w-24 text-right font-medium">2020</div>
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.chestnut }} />
              <div className="flex-1">
                <h3 className="font-medium mb-2">Founded 5ELM</h3>
                <p className="text-gray-600">Started our journey with a vision to bring authentic Ayurvedic beauty solutions to the world.</p>
              </div>
            </div>
            {/* Add more timeline items */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
