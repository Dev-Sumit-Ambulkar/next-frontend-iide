import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
        <Image
              src="/assets/nxt_assets/logo.webp"
              alt="IIDE Logo"
              width={80} height={100}
            ></Image>
          <p className="text-sm">
          IIDE - Digital Marketing Courses, <br />
          Girls Education Society, IIDE Campus,<br/>
          AGES, SV Road, near Andheri Station, <br/>
          Andheri West, Andheri, 
          Mumbai, <br/>
          Maharashtra 400058<br/>
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">News & Info</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Regarding More Info</a></li>
            <li>Connect Us : <br /><a href="mailto:support@iide.com" className="hover:text-blue-500">support@iide.com</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Pricing</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#">App Subscriptions</a></li>
            <li><a href="#">Contest</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#">Contact Us</a></li>
            <li>Email On: <br /><a href="mailto:support@iide.com" className="hover:text-blue-500">support@iide.com</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Terms</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#">Terms & Condition</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund & Cancellation Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Social</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center">
        <p className="text-xs">
          &copy; Copyright 2024 IIDE - Digital Marketing Courses All Rights Reserved.
        </p>
        <p className="text-xs mt-2">Developed By : IIDE</p>
      </div>
    </footer>
  );
};

export default Footer;
