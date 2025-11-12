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
    title: 'Onboarding',
    description: (
      <>
        Complete our 5-step onboarding process to connect QuickBooks, build services, 
        configure emails, and invite your team members.
      </>
    ),
    link: '/docs/onboarding/create-user-account',
  },
  {
    title: 'Customer Management',
    description: (
      <>
        Manage your customers and their information. Add new customers, edit existing 
        customers, and keep all customer data organized in one place.
      </>
    ),
    link: '/docs/customer-management/customers',
  },
  {
    title: 'Routes',
    description: (
      <>
        Set up and manage routes within JobRoutr. Use the route builder and optimization 
        tools to create efficient service schedules for your team.
      </>
    ),
    link: '/docs/routes/route-builder',
  },
  {
    title: 'Operations',
    description: (
      <>
        Monitor your business with the dashboard, track service history, and generate 
        detailed service reports to keep operations running smoothly.
      </>
    ),
    link: '/docs/operations/dashboard',
  },
  {
    title: 'Invoicing',
    description: (
      <>
        Set up and manage invoicing within JobRoutr. Learn how to generate invoices 
        for your customers and streamline your billing process.
      </>
    ),
    link: '/docs/invoicing/generate-invoices',
  },
  {
    title: 'Additional Setup',
    description: (
      <>
        Configure company settings, manage readings, and customize additional features 
        to tailor JobRoutr to your specific business needs.
      </>
    ),
    link: '/docs/additional-setup/company-settings',
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
