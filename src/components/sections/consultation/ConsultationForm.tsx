import { useEffect, useState } from 'react';
import { cnb } from 'cnbuilder';
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import * as ctaStyles from '@components/CtaLink/CtaLink.styles';
import * as styles from './ConsultationForm.styles';

// Same options, in the same order, as the existing Google Form intake (getsws.stanford.edu).
const ORGANIZATIONS = [
  'Admissions & Financial Aid',
  'Board of Trustees',
  'Business Affairs (BA)',
  'Department of Athletics, Physical Education, and Recreation (DAPER)',
  'Graduate School of Business (GSB)',
  'Graduate School of Education (GSE)',
  'Hoover Institution',
  'Land, Buildings and Real Estate (LBRE)',
  'Office of Development (OOD)',
  'Office of External Relations (EXRE)',
  'Office of the General Counsel (OGC)',
  'Offices of the President and Provost (PPO)',
  'Residential & Dining Enterprises (R&DE)',
  'School of Engineering (SoE)',
  'School of Humanities and Sciences (H&S)',
  'Staff Group/Community of Practice',
  'Stanford Alumni Association (SAA)',
  'Center for Global and Online Education (CGOE)',
  'Stanford Doerr School of Sustainability (SDSS)',
  'Stanford Hospital and Clinics/Lucile Packard Children’s Hospital/Stanford Medicine (SHC/LPCH/SOM)',
  'Stanford Law School (SLS)',
  'Stanford Linear Accelerator (SLAC)',
  'Stanford Management Company (SMC)',
  'Stanford University Libraries (SUL)',
  'University Communications (UCOMM)',
  'University Human Resources (UHR)',
  'University IT (UIT)',
  'Vice President for the Arts (VPA)',
  'Vice Provost and Dean of Research (VPDoR)',
  'Vice Provost for Graduate Education (VPGE)',
  'Vice Provost for Student Affairs (VPSA)',
  'Vice Provost for Undergraduate Education (VPUE)',
  'Other/Unknown',
];

const ENDPOINT = '/api/consultation';

type Status = 'idle' | 'sending' | 'success' | 'error';

export const ConsultationForm = () => {
  const [status, setStatus] = useState<Status>('idle');

  // Without JS the form posts natively and the function redirects back with ?submitted=1 or ?error=1.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('submitted')) setStatus('success');
    else if (params.has('error')) setStatus('error');
  }, []);

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form
      action={ENDPOINT}
      method="post"
      aria-labelledby="consultation-form-heading"
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <div className={styles.field}>
        <label htmlFor="consultation-email" className={styles.label}>Stanford email*</label>
        <input
          id="consultation-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="consultation-first-name" className={styles.label}>First name*</label>
        <input
          id="consultation-first-name"
          name="firstName"
          type="text"
          autoComplete="given-name"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="consultation-last-name" className={styles.label}>Last name*</label>
        <input
          id="consultation-last-name"
          name="lastName"
          type="text"
          autoComplete="family-name"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="consultation-organization" className={styles.label}>Your primary organization*</label>
        <p id="consultation-organization-help" className={styles.helpText}>
          Please select the primary organization that will sponsor the project. Select “Other/Unknown” if your organization is not affiliated with one on this list.
        </p>
        <div className={styles.selectWrapper}>
          <select
            id="consultation-organization"
            name="organization"
            required
            defaultValue=""
            aria-describedby="consultation-organization-help"
            className={styles.select}
          >
            <option value="" disabled>Select an organization</option>
            {ORGANIZATIONS.map((org) => (
              <option key={org} value={org}>{org}</option>
            ))}
          </select>
          <ChevronDownIcon aria-hidden="true" className={styles.selectIcon} />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="consultation-website" className={styles.label}>
          Your website (<em>if one exists</em>)
        </label>
        <p id="consultation-website-help" className={styles.helpText}>
          If this project involves an existing website, please share the URL.
        </p>
        <input
          id="consultation-website"
          name="website"
          type="text"
          inputMode="url"
          autoComplete="url"
          aria-describedby="consultation-website-help"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="consultation-details" className={styles.label}>Tell us more</label>
        <p id="consultation-details-help" className={styles.helpText}>
          Share any details that might be helpful to understanding what you’re looking for.
        </p>
        <textarea
          id="consultation-details"
          name="details"
          rows={1}
          maxLength={5000}
          aria-describedby="consultation-details-help"
          className={styles.textarea}
        />
      </div>

      {/* Spam trap: people never see this field, but bots tend to fill it in. */}
      <div hidden>
        <label htmlFor="consultation-company">Leave this field empty</label>
        <input id="consultation-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={styles.submitRow}>
        <button
          type="submit"
          disabled={status === 'sending'}
          className={cnb(ctaStyles.ctaVariants['button-light'], 'cursor-pointer disabled:cursor-wait disabled:opacity-60')}
        >
          {status === 'sending' ? 'Sending…' : 'Submit'}
          <ArrowRightIcon aria-hidden="true" className={ctaStyles.icon(false)} />
        </button>
        <p role="status" className={styles.status}>
          {status === 'success' && (
            <span className={styles.statusVariants.success}>
              Thank you! Your request has been sent. Our team will be in touch soon.
            </span>
          )}
          {status === 'error' && (
            <span className={styles.statusVariants.error}>
              Sorry, something went wrong sending your request. Please try again.
            </span>
          )}
        </p>
      </div>
    </form>
  );
};
