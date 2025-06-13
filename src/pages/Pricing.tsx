import './Pricing.css';
import { useState } from 'react';
import Img1 from '../assets/chevron.svg';
import Img2 from '../assets/minus.svg';

interface Step {
  question: string;
  answer: string;
}

const plans = [
  {
    title: 'Basic Plan',
    price: '$500',
    features: [
      'Website optimization',
      'Social media setup and management (1 platform)',
      'Monthly progress report',
      'Email support',
      'Basic competitor analysis',
      'Initial SEO audit',
    ],
  },
  {
    title: 'Pro Plan',
    price: '$1000',
    tag: 'Popular',
    features: [
      'Includes all from the Basic Plan',
      'Social media setup and management (up to 3 platforms)',
      'PPC ad campaign management',
      'Email and phone support',
      'Progress check-ins (bi-weekly)',
      'Monthly content recommendations',
    ],
  },
  {
    title: 'Elite Plan',
    price: '$2000',
    features: [
      'Includes all from the Pro Plan',
      'Website design and development',
      'Comprehensive SEO strategy',
      'Social media setup and management (up to 5)',
      'Content marketing strategy and implementation',
      'In-depth analytics and reporting',
    ],
  },
];

const steps: Step[] = [
  {
    question: 'Are there any additional fees or charges that may apply?',
    answer:
      'Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. We also offer custom packages that can be tailored to meet the specific needs of your business.',
  },
  {
    question: 'Can I change or cancel my plan at any time?',
    answer:
      'Yes, you can upgrade, downgrade, or cancel your plan at any time. We believe in flexibility and transparency — there are no long-term contracts or hidden cancellation fees.',
  },
  {
    question: 'Do you offer a free trial or consultation?',
    answer:
      'Absolutely! We offer a free initial consultation to understand your business goals and determine how our services can help. This includes a basic audit of your current online presence.',
  },
  {
    question: 'How do you bill and invoice your clients?',
    answer:
      'We bill on a monthly basis, with invoices sent at the beginning of each billing cycle. Payment can be made via bank transfer, credit/debit card, or PayPal. Customized billing cycles are available for enterprise clients.',
  },
  {
    question: 'Are your services guaranteed to deliver results?',
    answer:
      'While no digital marketing agency can guarantee exact results due to market variability, we do guarantee consistent effort, data-driven strategies, and measurable growth metrics. Our focus is always on delivering value and ROI.',
  },
  {
    question: 'Do you offer content-based or monthly retainer-based pricing?',
    answer:
      'Yes, we offer both. Clients can choose content-based pricing for specific deliverables, or opt for a monthly retainer plan that covers a full range of services. We also create hybrid packages for maximum flexibility.',
  },
];

const Pricing: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="pricingContainer">
      <h1 className="pricingTitle">Pricing</h1>
      <p className="pricingSubTitle">
        Evaluate your Online Presence: Competitive Pricing for Exceptional Results
      </p>
      <div className="pricingCardsContainer">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricingCard ${plan.tag === 'Popular' ? 'popular' : ''}`}
          >
            <h3 className="planTitle">{plan.title}</h3>
            <p className="planPrice">
              {plan.price}<span className="planDuration">/month</span>
            </p>

            {plan.tag && <span className="badge">{plan.tag}</span>}

            <button
            className={`planBtn primary ${plan.tag === 'Popular' ? 'primaryGreen' : ''}`}
            >
           Get Started
           </button>
            <button className="planBtn quoteBtn">Request a quote</button>

            <ul className="featureList">
              {plan.features.map((feature, i) => (
                <li key={i} className="featureItem">✔ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h2 className="faqquestion">Frequently Asked Questions</h2>
      {steps.map((step, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            className={`step ${isActive ? 'active' : ''}`}
            onClick={() => toggleStep(index)}
          >
            <div className="stepHeader">
              <div className="left">
                <span className="stepquestion">{step.question}</span>
              </div>
              <div className="icon">
                <img src={isActive ? Img2 : Img1} alt="toggle" />
              </div>
            </div>

            {isActive && (
              <>
                <div className="divider" />
                <p className="answer">{step.answer}</p>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Pricing;
