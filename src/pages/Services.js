import React from 'react';

const Services = () => {
  return (
    <div style={styles.container}>
      {/* Main Service Offering Section */}
      <section style={styles.section}>
        <h1 style={styles.mainHeading}>Our Service Offering</h1>
        {/* Centered Integrated marketing communications */}
        <p style={styles.centeredText}>
          Integrated marketing communications
        </p>
        <p style={styles.text}>
          While other agencies may provide discrete services, Marketing Solutions delivers the fully integrated marketing communications programmes our clients need to achieve bottom-line results.
        </p>
        <p style={styles.text}>
          We focus on adding value by delivering consistent, connected and cohesive marketing communications campaigns. To do this, Marketing Solutions is aligned around five service areas: strategy development & insights, content marketing, influencer relations, digital marketing communications, and commstech & analytics.
        </p>
      </section>

      {/* Strategy Development & Insights Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Strategy Development & Insights</h2>
        <p style={styles.subheading}>The foundation of communications</p>
        <p style={styles.text}>
          Understanding a customer's markets and its strategies establishes the foundation on which the strategic communications plan is built. Once created, all marketing communications activities flow from the strategic plan and are measured against its objectives.
        </p>
        <p style={styles.text}>
          Various elements of research are employed to provide insights for the development of the communications plan: from monitoring competitive positioning, industry trends, and customer persona messaging to customer journey communications.
        </p>
      </section>

      {/* Content Marketing Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Content Marketing</h2>
        <p style={styles.subheading}>Telling your story</p>
        <p style={styles.text}>
          Industrial technology has a rich reservoir of (often untapped) stories of innovation and invention. We understand and translate complex technical content into comprehensive and effective communications campaigns for you to engage with your key audiences in sectors such as automation, automotive, chemicals, construction, energy, packaging, plastics, and processing sectors.
        </p>
        <p style={styles.text}>
          We can help you mine stories and narratives out of your business and package them for use across multiple internal and external channels. In addition to a team of in-house writers, the EMG Creative Network of technical writers, designers, and videographers ensures the right message gets to the right audience in the right way.
        </p>
      </section>

      {/* Influencer Relations Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Influencer Relations</h2>
        <p style={styles.subheading}>Knowing who to talk to</p>
        <p style={styles.text}>
          A planned and effectively managed flow of information about a company's products, services, and activities to the appropriate influencers, and through them to targeted audiences, is fundamental to all marketing programmes. We have comprehensive, 'live', global databases and are continuously forging close working relationships with key industrial publications, journalists, bloggers, and other influencers.
        </p>
        <p style={styles.text}>
          We regularly manage major international press conferences, media tours, and press briefings which ensure in-depth coverage of significant news items and business initiatives.
        </p>
      </section>

      {/* Digital & Omni Channel Communications Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Digital & Omni Channel Communications</h2>
        <p style={styles.subheading}>Aligning channels and audiences</p>
        <p style={styles.text}>
          We believe in a blend of traditional media relations and advertising, trade shows, and events with social media and digital channels. We’ve always got one eye on the future, assessing new platforms, techniques, and technologies and how these offer new opportunities to amplify company communications to the target audiences.
        </p>
        <p style={styles.text}>
          To establish your brand, we research the channels your target audiences use, develop content that tells your story, and reach out across a mix of channels to create engagement – combining marketing communications expertise with digital technology.
        </p>
      </section>

      {/* CommsTech & Analytics Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>CommsTech & Analytics</h2>
        <p style={styles.subheading}>Making it effective</p>
        <p style={styles.text}>
          Over the years, we have invested in developing a suite of proprietary CommsTech tools that make planning, tracking of press, monitoring, analytics, and reporting as efficient and accessible as possible. We're very proud of these tools which help us measure multiple forms of data such as share of voice, media penetration, social amplification, and influencer impact. Ultimately, they demonstrate the effectiveness of communications.
        </p>
        <p style={styles.text}>
          However, we don’t lock our clients into using our suite of tools, and we remain platform agnostic. Each client has its own specific challenges and has built a bespoke communications technology infrastructure to match their requirement. Our approach is to slot in seamlessly and add value from day one.
        </p>
      </section>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f7f7f7',
    padding: '20px',
    lineHeight: '1.6',
  },
  section: {
    marginBottom: '40px',
  },
  mainHeading: {
    fontSize: '2.5rem',
    color: '#4B0082', // Dark purple
    marginBottom: '20px',
    textAlign: 'center',
  },
  centeredText: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '15px',
    textAlign: 'center', // Center the text
    fontWeight: 'bold',
  },
  heading: {
    fontSize: '2rem',
    color: '#4B0082',
    marginBottom: '10px',
    textAlign: 'center',
  },
  subheading: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '15px',
    textAlign: 'center',
  },
  text: {
    fontSize: '1.2rem',
    color: '#333',
    textAlign: 'justify',
    maxWidth: '800px',
    margin: '0 auto',
  },
};

export default Services;

