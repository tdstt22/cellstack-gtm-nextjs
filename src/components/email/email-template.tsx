import { Img } from "@react-email/components";

interface EmailTemplateProps {
  firstName: string;
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <div style={{
      backgroundColor: '#f8fafc',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      }}>
        {/* Header with logo */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '40px 40px 32px',
          borderBottom: '1px solid #e2e8f0',
        }}>
          <Img
            src="https://gtm.cellstackai.com/cellstack-logo-with-text.svg"
            alt="Cellstack"
            width="180"
            height="auto"
            style={{ display: 'block', margin: '0 auto' }}
          />
        </div>

        {/* Main content */}
        <div style={{ padding: '40px' }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#3d3d3d',
            marginTop: '0',
            marginBottom: '16px',
            lineHeight: '1.3',
          }}>
            Hello, {firstName}!
          </h1>

          <p style={{
            fontSize: '16px',
            color: '#64748b',
            lineHeight: '1.6',
            marginTop: '0',
            marginBottom: '24px',
          }}>
            Thank you for your interest in our service - we’re excited to have you onboard. Our team is currently reviewing your information and will follow up with you as soon as possible.
          </p>

          {/* Info box */}
          <div style={{
            backgroundColor: '#f0f8ff',
            border: '1px solid #d1e9ff',
            borderRadius: '8px',
            padding: '24px',
            marginBottom: '24px',
          }}>
            <h2 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#3d3d3d',
              marginTop: '0',
              marginBottom: '16px',
            }}>
              What happens next?
            </h2>
            <ul style={{
              margin: '0',
              paddingLeft: '20px',
              color: '#64748b',
              fontSize: '15px',
              lineHeight: '1.8',
            }}>
              <li style={{ marginBottom: '8px' }}>Our team will review your information</li>
              <li style={{ marginBottom: '8px' }}>We will reach out to schedule a call to understand your specific GTM needs</li>
              <li>You will get early access to Cellstack</li>
            </ul>
          </div>

          <p style={{
            fontSize: '16px',
            color: '#64748b',
            lineHeight: '1.6',
            marginTop: '0',
            marginBottom: '24px',
          }}>
            In the meantime, if you have any questions or would like to share more details about your use case, feel free to reach us at{' '}
            <a href="mailto:admin@cellstackai.com" style={{ color: '#3b97f5', textDecoration: 'none', fontWeight: '500' }}>
              admin@cellstackai.com
            </a>.
          </p>

          <div style={{
            borderTop: '1px solid #e2e8f0',
            paddingTop: '24px',
            marginTop: '32px',
          }}>
            <p style={{
              fontSize: '15px',
              color: '#3d3d3d',
              margin: '0',
              lineHeight: '1.5',
            }}>
              Best regards,<br />
              <span style={{ fontWeight: '600', color: '#3b97f5' }}>The Cellstack Team</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          backgroundColor: '#f8fafc',
          padding: '32px 40px',
          borderTop: '1px solid #e2e8f0',
          textAlign: 'center' as const,
        }}>
          <p style={{
            fontSize: '13px',
            color: '#94a3b8',
            margin: '0 0 8px',
            lineHeight: '1.5',
          }}>
            Cellstack - AI-native BI platform for GTM teams
          </p>
          <p style={{
            fontSize: '13px',
            color: '#94a3b8',
            margin: '0',
            lineHeight: '1.5',
          }}>
            Transform your GTM decision-making from data chaos to instant clarity
          </p>
        </div>
      </div>
    </div>
  );
}