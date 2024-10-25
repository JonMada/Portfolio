import React from 'react';

import Footer from '../sections/footer';

const TermsOfService = () => {
    return (
        <div className='privacy'>
            <h1>Terms of Service</h1>

            <div className='content'>
            <p><strong>Last updated:</strong> October 24, 2024</p>

                <p>Welcome to Jon Madariaga. By accessing or using our Site, you agree to comply with these Terms of Service. If you do not agree with these terms, we recommend that you do not use our Site.</p>

                <h2>1. Acceptance of Terms</h2>
                <p>By accessing and using the Site, you agree to be legally bound by these Terms of Service. If you do not agree with any of these terms, you must cease using the Site immediately.</p>

                <h2>2. Changes to the Terms</h2>
                <p>We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting on the Site. It is your responsibility to review the Terms periodically to stay informed about any changes.</p>

                <h2>3. Use of the Site</h2>
                <h3>3.1. Prohibitions</h3>
                <p>You agree not to use the Site to:</p>
                <ul>
                    <li>Upload, publish, or distribute illegal, harmful content, or content that infringes on intellectual property rights.</li>
                    <li>Misuse the Site or its content.</li>
                    <li>Engage in activities that interfere with other users' use of the Site.</li>
                </ul>

                <h2>4. Intellectual Property</h2>
                <p>All content on the Site, including but not limited to text, graphics, logos, images, and software, is the property of Jon Madariaga and is protected by copyright and intellectual property laws. Reproduction, distribution, or modification of such content without the express permission of Jon Madariaga is not permitted.</p>

                <h2>5. Limitation of Liability</h2>
                <p>The Site is provided "as is" and "as available." [Your Name or Site Name] does not guarantee that the Site will be free of errors, viruses, or other harmful components. Under no circumstances shall we be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the Site.</p>

                <h2>6. Indemnification</h2>
                <p>You agree to indemnify and hold harmless Jon Madariaga, its employees, agents, and representatives from any claims, losses, damages, costs, or expenses, including reasonable attorney's fees, arising from your use of the Site or your violation of these Terms.</p>

                <h2>7. Governing Law</h2>
                <p>These Terms are governed by the laws of Spain. Any disputes arising in connection with these Terms shall be resolved exclusively in the courts of Basque Country.</p>

                <h2>8. Contact Information</h2>
                <p>If you have any questions about these Terms of Service, you can contact me at: <a href="mailto:jonmadariaga93@gmail.com" style={{ color: '#1F42E3' }}>jonmadariaga93@gmail.com</a></p>
            </div>

            <Footer/>
                            
        </div>
    );
};

export default TermsOfService;
