import { useState } from 'react';
import { Leaf, ArrowRight, Star, Sparkles, GalleryHorizontal } from 'lucide-react';


const DetailItem = ({ title, content }) => (
  <div>
    <h5 className="text-sm font-medium mb-1 text-white/80">
      {title}
    </h5>
    <p className="text-sm opacity-80">{content}</p>
  </div>
);

const DetailedView = ({ info }) => (
  <div className="mt-6 space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-3">
        <DetailItem title="Harvesting" content={info.harvesting} />
        <DetailItem title="Preparation" content={info.preparation} />
        <DetailItem title="Recommended Dosage" content={info.dosage} />
      </div>
      <div className="space-y-3">
        <DetailItem title="Interactions" content={info.interactions} />
        <DetailItem title="Sustainability" content={info.sustainability} />
      </div>
    </div>
  </div>
);

const IngredientsSection = () => {
  const [activeIngredient, setActiveIngredient] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const ingredients = [
    {
      name: "Ashwagandha",
      sanskritName: "अश्वगंधा",
      description: "An ancient medicinal herb with adaptogenic properties that helps reduce stress and anxiety while boosting energy levels.",
      benefits: ["Reduces Stress & Anxiety", "Boosts Energy", "Improves Concentration"],
      origin: "India",
      traditionalUse: "Used in Ayurveda for over 3,000 years as a Rasayana (tonic)",
      rating: 4.9,
      image: {
        src: "https://media.istockphoto.com/id/1265024528/photo/no-better-adventure-buddy.jpg?s=2048x2048&w=is&k=20&c=MWC1kpj44knI78injFyQOW7wGnTixFQbzUuTy7NmDVo=",
        alt: "Fresh Ashwagandha root and powder"
      },
      detailedInfo: {
        harvesting: "Harvested in winter after the berries ripen",
        preparation: "Root is dried and ground into powder",
        dosage: "300-600mg daily",
        interactions: "May interact with sedatives and thyroid medications",
        sustainability: "Sustainably grown in organic farms across India"
      }
    },
    {
      name: "Turmeric",
      sanskritName: "हल्दी",
      description: "A powerful anti-inflammatory root with curcumin that supports joint health and immune function.",
      benefits: ["Anti-inflammatory", "Antioxidant", "Immune Support", "Joint Health"],
      origin: "Southeast Asia",
      traditionalUse: "Ancient spice used in traditional medicine for centuries",
      rating: 4.8,
      image: {
        src: "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Fresh turmeric root and powder"
      },
      detailedInfo: {
        harvesting: "Harvested annually when leaves turn yellow",
        preparation: "Root is boiled, dried, and ground",
        dosage: "500-2000mg daily with black pepper",
        interactions: "May interact with blood thinners",
        sustainability: "Grown using traditional farming methods"
      }
    },
    {
      name: "Holy Basil",
      sanskritName: "तुलसी",
      description: "Also known as Tulsi, this sacred herb helps with stress relief and supports respiratory health.",
      benefits: ["Stress Relief", "Respiratory Health", "Natural Adaptogen", "Immune Support"],
      origin: "India",
      traditionalUse: "Sacred plant in Hinduism, used for its healing properties",
      rating: 4.7,
      image: {
        src: "/api/placeholder/900/500?text=Holy+Basil+Leaves",
        alt: "Fresh Holy Basil leaves"
      },
      detailedInfo: {
        harvesting: "Leaves harvested throughout growing season",
        preparation: "Fresh leaves or dried tea",
        dosage: "300-2000mg daily as tea or supplement",
        interactions: "May affect blood sugar levels",
        sustainability: "Traditionally grown in home gardens"
      }
    },
    {
      name: "Triphala",
      sanskritName: "त्रिफला",
      description: "A traditional Ayurvedic blend of three fruits that supports digestive health and detoxification.",
      benefits: ["Digestive Health", "Detoxification", "Antioxidant Properties", "Gut Health"],
      origin: "India",
      traditionalUse: "Classical Ayurvedic formulation for gut health",
      rating: 4.9,
      image: {
        src: "/api/placeholder/750/650?text=Triphala+Blend",
        alt: "Triphala powder and fruits"
      },
      detailedInfo: {
        harvesting: "Three fruits harvested at peak ripeness",
        preparation: "Fruits are dried and powdered in equal parts",
        dosage: "500-1000mg before bed",
        interactions: "May interact with diabetes medications",
        sustainability: "Sourced from forest-friendly cultivation"
      }
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#C4C3C0]/10 to-transparent py-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 w-80 h-80 bg-[#954535]/5 rounded-full blur-3xl" />
        <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-[#555D50]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#954535]" />
            <span className="text-sm uppercase tracking-wider text-[#954535]">Ancient Wisdom</span>
          </div>
          <h2 className="text-5xl font-light text-[#555D50] mb-6">Know Our Ingredients</h2>
          <p className="text-[#954535] max-w-2xl mx-auto text-lg">
            Discover the power of natures finest ingredients, carefully selected for their authentic Ayurvedic properties.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Section */}
          <div className="sticky top-8">
            <div
              className={`relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 
                          ${isHovered ? 'scale-105' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={ingredients[activeIngredient].image.src}
                  alt={ingredients[activeIngredient].image.alt}
                  className={`w-full h-full object-cover transform transition-transform duration-700 
                              ${isHovered ? 'scale-110' : ''}`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                              transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-90'}`}
                />
              </div>

              {/* Image Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <GalleryHorizontal className="w-5 h-5 text-[#C4C3C0]" />
                  <span className="text-[#C4C3C0] text-sm tracking-wider">FEATURED INGREDIENT</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-3xl font-medium text-white mb-2">
                      {ingredients[activeIngredient].name}
                    </h3>
                    <p className="text-lg text-white/80 mb-1">
                      {ingredients[activeIngredient].sanskritName}
                    </p>
                    <p className="text-sm text-white/60">Origin: {ingredients[activeIngredient].origin}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">
                      {ingredients[activeIngredient].rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ingredients List */}
          <div className="space-y-4">
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                className={`group p-6 rounded-xl transition-all duration-500 cursor-pointer
                             transform hover:scale-102 border
                             ${activeIngredient === index
                               ? 'bg-[#555D50] text-white border-[#555D50]'
                               : 'bg-white/80 hover:bg-[#555D50]/5 border-[#954535]/10'}`}
                onClick={() => setActiveIngredient(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Leaf className={`w-5 h-5 ${activeIngredient === index ? 'text-white' : 'text-[#954535]'}`} />
                    <div>
                      <h3 className="text-xl font-medium">{ingredient.name}</h3>
                      <p className={`text-sm ${activeIngredient === index ? 'text-white/80' : 'text-[#555D50]/60'}`}>
                        {ingredient.sanskritName}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 transform transition-all duration-300
                                 ${activeIngredient === index
                                   ? 'translate-x-1 opacity-100'
                                   : 'opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-50'}`}
                  />
                </div>

                <div
                  className={`mt-6 transition-all duration-500 
                                ${activeIngredient === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  <p className="mb-6 leading-relaxed">{ingredient.description}</p>
                  <div className="mb-6">
                    <h4
                      className={`text-sm font-medium mb-2 ${
                        activeIngredient === index ? 'text-white/80' : 'text-[#555D50]'
                      }`}
                    >
                      Traditional Use
                    </h4>
                    <p className="text-sm opacity-80">{ingredient.traditionalUse}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {ingredient.benefits.map((benefit, i) => (
                      <span
                        key={i}
                        className={`px-4 py-1.5 rounded-full text-sm transition-colors duration-300
                                    ${activeIngredient === index
                                      ? 'bg-white/20 text-white'
                                      : 'bg-[#954535]/10 text-[#954535]'}`}
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                  <DetailedView info={ingredient.detailedInfo} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsSection;