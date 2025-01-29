import { useState } from 'react';
import { Leaf, ArrowRight, Star, Sparkles, GalleryHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

const DetailItem = ({ title, content }) => (
  <div>
    <h5 className="text-sm font-medium mb-1 text-white/80">{title}</h5>
    <p className="text-sm opacity-80">{content}</p>
  </div>
);

const DetailedView = ({ info }) => (
  <div className="mt-4">
    <div className="grid grid-cols-2 gap-4">
      <DetailItem title="Harvesting" content={info.harvesting} />
      <DetailItem title="Preparation" content={info.preparation} />
      <DetailItem title="Recommended Dosage" content={info.dosage} />
      <DetailItem title="Interactions" content={info.interactions} />
      <DetailItem title="Sustainability" content={info.sustainability} />
    </div>
  </div>
);

const IngredientsSection = () => {
  const [activeIngredient, setActiveIngredient] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const ingredientsPerPage = 3;

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
        src: "/api/placeholder/900/600?text=Ashwagandha",
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
        src: "/api/placeholder/900/600?text=Turmeric",
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
        src: "/api/placeholder/900/600?text=Holy+Basil",
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
        src: "/api/placeholder/900/600?text=Triphala",
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

  const pageCount = Math.ceil(ingredients.length / ingredientsPerPage);
  const visibleIngredients = ingredients.slice(
    currentPage * ingredientsPerPage,
    (currentPage + 1) * ingredientsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
    setActiveIngredient(0);
    setShowDetails(false);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
    setActiveIngredient(0);
    setShowDetails(false);
  };

  return (
    <div className="relative bg-gradient-to-b from-[#C4C3C0]/10 to-transparent py-12 lg:py-20">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 w-80 h-80 bg-[#954535]/5 rounded-full blur-3xl" />
        <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-[#555D50]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#954535]" />
            <span className="text-sm uppercase tracking-wider text-[#954535]">Ancient Wisdom</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-[#555D50] mb-6">Know Our Ingredients</h2>
          <p className="text-[#954535] max-w-2xl mx-auto text-base lg:text-lg">
            Discover the power of natures finest ingredients, carefully selected for their authentic Ayurvedic properties.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Image Section */}
          <div className="lg:sticky lg:top-8">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={ingredients[currentPage * ingredientsPerPage + activeIngredient].image.src}
                  alt={ingredients[currentPage * ingredientsPerPage + activeIngredient].image.alt}
                  className={`w-full h-full object-cover transform transition-transform duration-700 ${
                    isHovered ? 'scale-110' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Image Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <GalleryHorizontal className="w-4 h-4 lg:w-5 lg:h-5 text-[#C4C3C0]" />
                  <span className="text-[#C4C3C0] text-xs lg:text-sm tracking-wider">FEATURED INGREDIENT</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-medium text-white mb-2">
                      {ingredients[currentPage * ingredientsPerPage + activeIngredient].name}
                    </h3>
                    <p className="text-base lg:text-lg text-white/80 mb-1">
                      {ingredients[currentPage * ingredientsPerPage + activeIngredient].sanskritName}
                    </p>
                    <p className="text-xs lg:text-sm text-white/60">
                      Origin: {ingredients[currentPage * ingredientsPerPage + activeIngredient].origin}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">
                      {ingredients[currentPage * ingredientsPerPage + activeIngredient].rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ingredients List */}
          <div className="space-y-4">
            {visibleIngredients.map((ingredient, index) => (
              <div
                key={index}
                className={`group p-4 lg:p-6 rounded-xl transition-all duration-500 cursor-pointer border 
                           ${
                             activeIngredient === index
                               ? 'bg-[#555D50] text-white border-[#555D50]'
                               : 'bg-white/80 hover:bg-[#555D50]/5 border-[#954535]/10'
                           }`}
                onClick={() => {
                  setActiveIngredient(index);
                  setShowDetails(false);
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Leaf className={`w-5 h-5 ${activeIngredient === index ? 'text-white' : 'text-[#954535]'}`} />
                    <div>
                      <h3 className="text-lg lg:text-xl font-medium">{ingredient.name}</h3>
                      <p className={`text-sm ${activeIngredient === index ? 'text-white/80' : 'text-[#555D50]/60'}`}>
                        {ingredient.sanskritName}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 transform transition-all duration-300 
                               ${activeIngredient === index ? 'translate-x-1 opacity-100' : 'opacity-0 group-hover:opacity-50'}`}
                  />
                </div>

                {activeIngredient === index && (
                  <div className="mt-4">
                    <p className="text-sm lg:text-base leading-relaxed mb-4">{ingredient.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2 text-white/80">Traditional Use</h4>
                      <p className="text-sm opacity-80">{ingredient.traditionalUse}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {ingredient.benefits.map((benefit, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs lg:text-sm bg-white/20 text-white"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowDetails(!showDetails);
                      }}
                      className="text-sm text-white/90 hover:text-white flex items-center gap-2 group"
                    >
                      {showDetails ? 'Show Less' : 'View Details'}
                      <ArrowRight 
                        className={`w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1
                                   ${showDetails ? 'rotate-90' : ''}`} 
                      />
                    </button>
                    {showDetails && <DetailedView info={ingredient.detailedInfo} />}
                  </div>
                )}
              </div>
            ))}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handlePrevPage}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                           ${currentPage === 0
                             ? 'opacity-50 cursor-not-allowed'
                             : 'hover:bg-[#555D50] hover:text-white'}`}
                disabled={currentPage === 0}
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>
              <div className="flex gap-2">
                {[...Array(pageCount)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentPage(idx);
                      setActiveIngredient(0);
                      setShowDetails(false);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 
                               ${currentPage === idx ? 'bg-[#555D50] w-6' : 'bg-[#954535]/20'}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNextPage}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                           ${currentPage === pageCount - 1
                             ? 'opacity-50 cursor-not-allowed'
                             : 'hover:bg-[#555D50] hover:text-white'}`}
                disabled={currentPage === pageCount - 1}
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsSection;