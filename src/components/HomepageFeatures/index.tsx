import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Getting Started',
    description: (
      <>
        New to JobRoutr? Learn about the platform, key features, and how to navigate the Help Center.
      </>
    ),
    link: '/docs/intro',
  },
  {
    title: 'Onboarding Guide',
    description: (
      <>
        Complete our 5-step onboarding process to connect QuickBooks, build services, 
        configure emails, and invite your team members.
      </>
    ),
    link: '/docs/onboarding/create-user-account',
  },
  {
    title: 'QuickBooks Integration',
    description: (
      <>
        Learn how to seamlessly integrate JobRoutr with QuickBooks Online to sync customers, 
        products, and invoices for accurate accounting.
      </>
    ),
    link: '/docs/onboarding/connect-quickbooks',
  },
  {
    title: 'Service Management',
    description: (
      <>
        Create and manage your service offerings with custom pricing, task lists, 
        and duration estimates to standardize your operations.
      </>
    ),
    link: '/docs/onboarding/build-service',
  },
  {
    title: 'Email Configuration',
    description: (
      <>
        Set up automated customer communications with custom email templates, 
        company branding, and service completion notifications.
      </>
    ),
    link: '/docs/onboarding/configure-email',
  },
  {
    title: 'Team Management',
    description: (
      <>
        Invite team members, assign roles and permissions, and give your technicians 
        access to the mobile app for efficient field operations.
      </>
    ),
    link: '/docs/onboarding/invite-team',
  },
];

function Feature({title, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className="card shadow--md">
        <div className="card__header">
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link to={link} className="button button--primary button--block">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Popular Documentation</Heading>
          <p>Explore our most accessed help articles and guides</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
