import React from 'react';
import styles from './about.module.css';
import { FaGlobe, FaLeaf, FaFlask, FaAward, FaIndustry, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Weaving Innovation Since 1990</h1>
          <p className={styles.heroText}>
            HMS Textile Group combines traditional craftsmanship with cutting-edge technology
            to deliver exceptional textile solutions worldwide.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.section}>
        <h2 className={styles['section-title']}>Our Story</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>1990</div>
            <div className={styles.timelineContent}>
              <h3>Founding Years</h3>
              <p>Established as a small weaving unit with just 20 looms, serving local markets.</p>
            </div>
          </div>
          <div className={styles.timelineConnector}></div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>2005</div>
            <div className={styles.timelineContent}>
              <h3>First Expansion</h3>
              <p>Added spinning and dyeing facilities, becoming a vertically integrated manufacturer.</p>
            </div>
          </div>
          <div className={styles.timelineConnector}></div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>2018</div>
            <div className={styles.timelineContent}>
              <h3>Global Recognition</h3>
              <p>Achieved OEKO-TEX® and GOTS certifications, expanding to 30+ countries.</p>
            </div>
          </div>
          <div className={styles.timelineConnector}></div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>Present</div>
            <div className={styles.timelineContent}>
              <h3>Industry Leader</h3>
              <p>Now serving 49 countries with 500+ employees and state-of-the-art facilities.</p>
            </div>
          </div>
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>30+</div>
            <div className={styles.statLabel}>Years in Business</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>49</div>
            <div className={styles.statLabel}>Countries Served</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>Employees</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>50K</div>
            <div className={styles.statLabel}>Meters Daily Production</div>
          </div>
        </div>

        <p className={styles.sectionText}>
          HMS Textile Group has been a pioneering force in the textile industry for over three decades, 
          specializing in the production of premium quality fabrics and materials. Our facility spans 
          more than 50,000 square meters and integrates advanced technologies to meet the growing 
          demands of global markets while maintaining our commitment to sustainability and innovation.
        </p>

        <p className={`${styles.sectionText} ${styles.mt3}`}>
          With expertise in yarns, woven and knitted fabrics, and ready-made garments, we serve 
          a wide array of industries including fashion, home textiles, hospitality, and healthcare. 
          Our extensive product lines feature 100% cotton, polyester blends, linen blends, and technical textiles 
          tailored to specific end-use applications, combining functionality with aesthetic appeal.
        </p>

        <div className={`${styles.productionDetails} ${styles.mt4}`}>
          <h4 className={styles.subsectionTitle}>Manufacturing Excellence</h4>
          <ul className={styles.productionFeatures}>
            <li className={styles.featureItem}>
              <div className={styles.featureIcon}><FaIndustry /></div>
              <strong>Vertical Integration:</strong> Full control of the value chain—from ginning, spinning, 
              knitting, and weaving to dyeing, finishing, and garmenting—ensures consistent product quality 
              and faster turnaround times.
            </li>
            <li className={styles.featureItem}>
              <div className={styles.featureIcon}><FaFlask /></div>
              <strong>Advanced Machinery:</strong> Outfitted with modern shuttle-less looms, circular knitting 
              machines, and computerized dyeing and finishing systems, enabling a production capacity of 
              over 50,000 meters of fabric per day with precision and efficiency.
            </li>
            <li className={styles.featureItem}>
              <div className={styles.featureIcon}><FaGlobe /></div>
              <strong>Global Reach:</strong> Our textiles and garments are exported to over 49 countries, 
              meeting the requirements of leading apparel brands and institutional clients with reliable 
              logistics and consistent quality.
            </li>
            <li className={styles.featureItem}>
              <div className={styles.featureIcon}><FaUsers /></div>
              <strong>Research & Development:</strong> A dedicated R&D wing with 25+ textile engineers focuses 
              on fabric innovation, functional textiles, and new material blends to stay ahead in a fast-changing industry.
            </li>
            <li className={styles.featureItem}>
              <div className={styles.featureIcon}><FaLeaf /></div>
              <strong>Sustainable Practices:</strong> Environmentally conscious operations include solar-powered 
              units, zero liquid discharge (ZLD) treatment systems, and sustainable sourcing of raw materials 
              with 30% reduced carbon footprint since 2015.
            </li>
            <li className={styles.featureItem}>
              <div className={styles.featureIcon}><FaAward /></div>
              <strong>Quality Assurance:</strong> Every production batch undergoes 12-point quality checks 
              and performance testing in our ISO-certified in-house lab, ensuring compliance with international standards.
            </li>
          </ul>

          <p className={`${styles.sectionText} ${styles.mt3}`}>
            Backed by a skilled workforce of over 500 professionals and driven by innovation and quality, 
            HMS Textile Group continues to strengthen its global footprint. Our commitment to ethical business 
            practices, employee welfare, and customer satisfaction has made us a trusted name in the textile domain.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <h2 className={styles['section-title']}>Our Core Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h3>Innovation</h3>
            <p>We constantly push boundaries in textile technology to create fabrics that meet tomorrow's needs today.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Sustainability</h3>
            <p>Responsible manufacturing is at our core - reducing waste, conserving resources, and protecting ecosystems.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Quality</h3>
            <p>From raw materials to finished products, we maintain uncompromising standards at every stage.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Integrity</h3>
            <p>We conduct business with transparency, fairness, and respect for all stakeholders.</p>
          </div>
        </div>
      </section>

      {/* Grid Layout for Content Sections */}
      <div className={styles.contentSectionsContainer}>
        <section className={`${styles.contentSection} ${styles.bgLight}`}>
          <div className={styles.sectionIcon}><FaGlobe /></div>
          <h2>Global Reach</h2>
          <p>
            Our textile products are exported to more than 49 countries worldwide, including the United States, 
            Germany, United Kingdom, and several Southeast Asian markets. This global footprint is supported 
            by reliable logistics, quality standards, and long-term customer relationships built on trust and 
            consistent delivery. We maintain regional offices in key markets to ensure responsive service.
          </p>
          <div className={styles.mapVisual}></div>
        </section>

        <section className={`${styles.contentSection} ${styles.bgLight}`}>
          <div className={styles.sectionIcon}><FaLeaf /></div>
          <h2>Sustainability Initiatives</h2>
          <p>
            With a focus on eco-conscious practices, we use organic cotton sourcing, water-saving dye techniques, 
            and renewable energy solutions. Our processing units achieve zero liquid discharge and reduced 
            carbon emissions. We've reduced water consumption by 40% since 2010 and aim to be carbon neutral 
            by 2030 through our "Green Thread Initiative".
          </p>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{width: '65%'}}>65% to Carbon Neutral</div>
          </div>
        </section>

        <section className={`${styles.contentSection} ${styles.bgLight}`}>
          <div className={styles.sectionIcon}><FaFlask /></div>
          <h2>Innovation in Textiles</h2>
          <p>
            We produce smart fabrics, anti-bacterial treatments, and climate-responsive materials through 
            advanced textile technology. Our R&D team continuously develops innovative solutions for modern 
            market demands, including phase-change materials for temperature regulation and conductive fabrics 
            for wearable technology applications.
          </p>
          <ul className={styles.innovationList}>
            <li>15+ patents in textile technology</li>
            <li>Annual R&D investment: 5% of revenue</li>
            <li>Collaborations with 3 leading textile universities</li>
          </ul>
        </section>

        <section className={`${styles.contentSection} ${styles.bgLight}`}>
          <div className={styles.sectionIcon}><FaAward /></div>
          <h2>Quality Assurance</h2>
          <p>
            Every fabric batch undergoes rigorous testing for colorfastness, shrinkage control, and durability. 
            We comply with international standards like OEKO-TEX® and GOTS to ensure premium quality. Our 
            quality management system is certified to ISO 9001:2015 standards, with 100% inspection of 
            critical parameters before shipment.
          </p>
          <div className={styles.certifications}>
            <span className={styles.certBadge}>OEKO-TEX®</span>
            <span className={styles.certBadge}>GOTS</span>
            <span className={styles.certBadge}>ISO 9001</span>
          </div>
        </section>
      </div>

      {/* Team Section */}
      {/* <section className={styles.teamSection}>
        <h2 className={styles['section-title']}>Our Leadership</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <div className={styles.memberPhoto}></div>
            <h3>Rajiv Mehta</h3>
            <p className={styles.memberTitle}>Founder & Chairman</p>
            <p>30+ years in textile manufacturing</p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberPhoto}></div>
            <h3>Priya Sharma</h3>
            <p className={styles.memberTitle}>CEO</p>
            <p>Driving innovation and sustainability</p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberPhoto}></div>
            <h3>Arjun Patel</h3>
            <p className={styles.memberTitle}>CTO</p>
            <p>Textile technology expert</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;