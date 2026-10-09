import React, { useState } from 'react';
import { Opportunity, OpportunityApplication } from '../../../types';
import { submitOpportunityApplication, registerVolunteer } from '../../../services/storage';

interface DynamicApplicationFormProps {
  opportunity: Opportunity;
  onClose?: () => void;
}

export function DynamicApplicationForm({ opportunity, onClose }: DynamicApplicationFormProps) {
  const [formData, setFormData] = useState<Partial<OpportunityApplication>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Volunteer specific state
  const [selectedRoleId, setSelectedRoleId] = useState<string>('');

  const formType = opportunity.formType || 'standard';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Simulate network delay
    setTimeout(() => {
      try {
        if (formType === 'volunteer' && opportunity.category === 'Volunteering') {
          // For volunteering, use registerVolunteer
          if (!selectedRoleId && opportunity.volunteerRoles && opportunity.volunteerRoles.length > 0) {
            throw new Error("Please select a volunteer role.");
          }
          const res = registerVolunteer({
            eventId: opportunity.id,
            roleId: selectedRoleId || opportunity.id,
            fullName: formData.fullName || '',
            email: formData.email || '',
            phone: formData.phone || '',
            college: formData.college || ''
          });
          if (!res.success) {
            throw new Error(res.message);
          }
        } else {
          submitOpportunityApplication({
            opportunityId: opportunity.id,
            opportunityTitle: opportunity.title,
            fullName: formData.fullName || '',
            email: formData.email || '',
            phone: formData.phone || '',
            college: formData.college || '',
            course: formData.course,
            year: formData.year,
            skills: formData.skills,
            resumeUrl: formData.resumeUrl,
            portfolioUrl: formData.portfolioUrl,
            availability: formData.availability,
            experienceLevel: formData.experienceLevel,
            talentStyle: formData.talentStyle,
            talentFormat: formData.talentFormat,
            socialProfile: formData.socialProfile,
            previousExperience: formData.previousExperience,
            note: formData.note,
          });
        }
        setSuccess(true);
      } catch (err: any) {
        setError(err.message || 'An error occurred during submission.');
      } finally {
        setIsSubmitting(false);
      }
    }, 1000);
  };

  if (success) {
    return (
      <div className="bg-green-900/20 border border-green-500/30 p-8 rounded-xl text-center">
        <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Application Submitted!</h3>
        <p className="text-gray-300 mb-6">
          Thank you for applying to <span className="font-semibold text-white">{opportunity.title}</span>. 
          Our team will review your application and get back to you soon.
        </p>
        {onClose && (
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-lg">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName || ''}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email || ''}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone || ''}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
            placeholder="+91 9876543210"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">College/University *</label>
          <input
            type="text"
            name="college"
            required
            value={formData.college || ''}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
            placeholder="Your College Name"
          />
        </div>
      </div>

      {/* --- CONDITIONAL FIELDS BASED ON FORM TYPE --- */}

      {(formType === 'internship' || formType === 'job') && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Course & Year *</label>
              <input
                type="text"
                name="course"
                required
                value={formData.course || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                placeholder="B.Tech 3rd Year"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Resume Link (Google Drive/Dropbox) *</label>
              <input
                type="url"
                name="resumeUrl"
                required
                value={formData.resumeUrl || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                placeholder="https://..."
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Relevant Skills *</label>
            <input
              type="text"
              name="skills"
              required
              value={formData.skills || ''}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
              placeholder="e.g. React, Node.js, Design, Marketing"
            />
          </div>
        </>
      )}

      {formType === 'talent' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Format *</label>
              <select
                name="talentFormat"
                required
                value={formData.talentFormat || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#111] border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-red"
              >
                <option value="">Select Format</option>
                <option value="Solo">Solo Performance</option>
                <option value="Group">Group / Band / Crew</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Experience Level *</label>
              <select
                name="experienceLevel"
                required
                value={formData.experienceLevel || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#111] border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-red"
              >
                <option value="">Select Level</option>
                <option value="Beginner">Beginner / Hobbyist</option>
                <option value="Intermediate">Intermediate / Has performed before</option>
                <option value="Advanced">Advanced / Professional</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Portfolio / Performance Video Link *</label>
            <input
              type="url"
              name="portfolioUrl"
              required
              value={formData.portfolioUrl || ''}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-red"
              placeholder="YouTube, Instagram Reel, or Drive Link"
            />
          </div>
        </>
      )}

      {formType === 'ambassador' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Course & Year *</label>
              <input
                type="text"
                name="course"
                required
                value={formData.course || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-red"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">LinkedIn / Social Profile *</label>
              <input
                type="url"
                name="socialProfile"
                required
                value={formData.socialProfile || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-red"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Previous Leadership Experience</label>
            <textarea
              name="previousExperience"
              rows={2}
              value={formData.previousExperience || ''}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-red resize-none"
              placeholder="Have you led a club or event before?"
            />
          </div>
        </>
      )}

      {formType === 'volunteer' && opportunity.volunteerRoles && opportunity.volunteerRoles.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Select Volunteer Role *</label>
          <div className="space-y-2 mt-2">
            {opportunity.volunteerRoles.map(role => {
              const isFull = role.filled >= role.capacity;
              return (
                <label 
                  key={role.id} 
                  className={`flex items-start p-3 border rounded-lg cursor-pointer transition-colors ${
                    isFull 
                      ? 'border-gray-800 opacity-50 cursor-not-allowed' 
                      : selectedRoleId === role.id
                        ? 'border-brand-red bg-brand-red/10'
                        : 'border-white/10 bg-white/5 hover:border-white/30'
                  }`}
                >
                  <input
                    type="radio"
                    name="roleId"
                    value={role.id}
                    disabled={isFull}
                    checked={selectedRoleId === role.id}
                    onChange={(e) => setSelectedRoleId(e.target.value)}
                    className="mt-1 mr-3 text-brand-red focus:ring-brand-red"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-medium text-white">{role.title}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${isFull ? 'bg-red-900/50 text-red-200' : 'bg-green-900/50 text-green-200'}`}>
                        {isFull ? 'Full' : `${role.capacity - role.filled} slots left`}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{role.description}</p>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          {formType === 'talent' ? 'Tell us about your performance/act *' : 'Why are you interested in this opportunity? *'}
        </label>
        <textarea
          name="note"
          required
          rows={3}
          value={formData.note || ''}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors resize-none"
          placeholder="I would love to be a part of this because..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || (formType === 'volunteer' && opportunity.category === 'Volunteering' && opportunity.volunteerRoles && opportunity.volunteerRoles.length > 0 && !selectedRoleId)}
        className="w-full py-3 bg-brand-red hover:bg-red-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </>
        ) : (
          'Submit Application'
        )}
      </button>
      <p className="text-xs text-center text-gray-500">
        Demo Registration. Data is saved locally in your browser.
      </p>
    </form>
  );
}
