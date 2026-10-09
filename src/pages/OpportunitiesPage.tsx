import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { OpportunitiesHubPage } from './opportunities/OpportunitiesHubPage';
import { CategoryDetailPage } from './opportunities/CategoryDetailPage';
import { CampusAmbassadorPage } from './opportunities/CampusAmbassadorPage';
import { TalentShowcasePage } from './opportunities/TalentShowcasePage';
import { OpportunityDetailPage } from './opportunities/OpportunityDetailPage';

export const OpportunitiesPage: React.FC = () => {
  const { categorySlug, id } = useParams<{ categorySlug?: string; id?: string }>();
  const [searchParams] = useSearchParams();

  const idQuery = searchParams.get('id');

  // Dedicated Detail Page view if ID exists in URL route or query param
  if (id || idQuery) {
    return <OpportunityDetailPage />;
  }

  // Handle specific category routes
  if (categorySlug) {
    if (categorySlug === 'campus-ambassador') {
      return <CampusAmbassadorPage />;
    }
    if (categorySlug === 'talent-showcase') {
      return <TalentShowcasePage />;
    }
    return <CategoryDetailPage />;
  }

  // Default: Main Redesigned Opportunities Hub
  return <OpportunitiesHubPage />;
};
