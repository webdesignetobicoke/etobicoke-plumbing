import React from 'react';
import { Phone, Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';
import CallNowButton from '@/components/layout/CallNowButton';

// Page Header Component
const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="bg-dental-primary text-white py-12 mb-12">
      <div className="container-dental">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">{title}</h1>
        <p className="text-lg max-w-2xl">
          Schedule your plumbing service with our professional team at Etobicoke Plumbing.
          We're looking forward to helping you with your plumbing needs!
        </p>
      </div>
    </div>
  );
};

export default function BookingPage() {
  return (
    <main>
      <PageHeader title="Book Your Appointment" />

      <div className="container-dental pb-16">
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {/* Booking Form - 3 columns wide */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-heading text-dental-dark mb-8">Request an Appointment</h2>

              <form className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-medium text-dental-dark mb-4 flex items-center">
                    <User size={20} className="mr-2 text-dental-primary" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-dental-dark mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-dental-dark mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dental-dark mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dental-dark mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="newPatient" className="block text-sm font-medium text-dental-dark mb-1">
                      Are you a new patient?*
                    </label>
                    <select
                      id="newPatient"
                      name="newPatient"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-primary"
                    >
                      <option value="">Please select</option>
                      <option value="yes">Yes, I am a new patient</option>
                      <option value="no">No, I have visited before</option>
                    </select>
                  </div>
                </div>

                {/* Appointment Details */}
                <div>
                  <h3 className="text-lg font-medium text-dental-dark mb-4 flex items-center">
                    <Calendar size={20} className="mr-2 text-dental-primary" />
                    Appointment Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="appointmentType" className="block text-sm font-medium text-dental-dark mb-1">
                        Type of Appointment*
                      </label>
                      <select
                        id="appointmentType"
                        name="appointmentType"
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-primary"
                      >
                        <option value="">Please select</option>
                        <option value="cleaning">Dental Cleaning</option>
                        <option value="checkup">Regular Checkup</option>
                        <option value="emergency">Emergency</option>
                        <option value="cosmetic">Cosmetic Consultation</option>
                        <option value="implant">Implant Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="preferredDoctor" className="block text-sm font-medium text-dental-dark mb-1">
                        Preferred Doctor
                      </label>
                      <select
                        id="preferredDoctor"
                        name="preferredDoctor"
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-primary"
                      >
                        <option value="">No preference</option>
                        <option value="dr-jung">Dr. Sunny Jung</option>
                        <option value="dr-park">Dr. Rachel Park</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-dental-dark mb-1">
                        Preferred Date*
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-dental-dark mb-1">
                        Preferred Time*
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-primary"
                      >
                        <option value="">Please select</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 4PM)</option>
                        <option value="evening">Evening (4PM - 6PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-dental-dark mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-primary"
                      placeholder="Please share any specific concerns or requests..."
                    ></textarea>
                  </div>
                </div>

                {/* Insurance Information */}
                <div>
                  <h3 className="text-lg font-medium text-dental-dark mb-4">
                    Insurance Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="insuranceProvider" className="block text-sm font-medium text-dental-dark mb-1">
                        Insurance Provider
                      </label>
                      <input
                        type="text"
                        id="insuranceProvider"
                        name="insuranceProvider"
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="insurancePolicyNumber" className="block text-sm font-medium text-dental-dark mb-1">
                        Policy Number
                      </label>
                      <input
                        type="text"
                        id="insurancePolicyNumber"
                        name="insurancePolicyNumber"
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="dental-btn-primary w-full py-3 text-center"
                  >
                    Request Appointment
                  </button>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    We'll confirm your appointment via email or phone.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar Information - 2 columns wide */}
          <div className="md:col-span-2 space-y-6">
            {/* Office Hours */}
            <div className="bg-dental-lightBlue rounded-2xl p-6">
              <h3 className="text-xl font-heading text-dental-dark mb-4 flex items-center">
                <Clock size={20} className="mr-2 text-dental-primary" />
                Office Hours
              </h3>

              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium text-dental-dark">Monday</div>
                <div>9:00 AM - 6:00 PM</div>

                <div className="font-medium text-dental-dark">Tuesday</div>
                <div>9:00 AM - 6:00 PM</div>

                <div className="font-medium text-dental-dark">Wednesday</div>
                <div>9:00 AM - 6:00 PM</div>

                <div className="font-medium text-dental-dark">Thursday</div>
                <div>9:00 AM - 6:00 PM</div>

                <div className="font-medium text-dental-dark">Friday</div>
                <div>9:00 AM - 4:00 PM</div>

                <div className="font-medium text-dental-dark">Saturday</div>
                <div>9:00 AM - 3:00 PM</div>

                <div className="font-medium text-dental-dark">Sunday</div>
                <div>Closed</div>
              </div>
            </div>

            {/* Call for Urgent Appointments */}
            <div className="bg-dental-primary text-white rounded-2xl p-6">
              <h3 className="text-xl font-heading mb-4 flex items-center">
                <Phone size={20} className="mr-2" />
                Need an Urgent Appointment?
              </h3>
              <p className="mb-4">
                For dental emergencies or urgent appointment requests, please give us a call directly.
                We prioritize emergency cases and will do our best to see you as soon as possible.
              </p>
              <CallNowButton />
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-heading text-dental-dark mb-4">
                Appointment FAQs
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-dental-primary mb-1">
                    What should I bring to my first appointment?
                  </h4>
                  <p className="text-sm text-dental-dark">
                    Please bring your ID, insurance information, and completed new patient forms if available.
                    Arrive 15 minutes early to complete any necessary paperwork.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-dental-primary mb-1">
                    How do I reschedule my appointment?
                  </h4>
                  <p className="text-sm text-dental-dark">
                    To reschedule, please call our office at least 24 hours in advance.
                    This allows us to accommodate other patients who may need urgent care.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-dental-primary mb-1">
                    Do you accept insurance?
                  </h4>
                  <p className="text-sm text-dental-dark">
                    Yes, we accept most major insurance plans. Visit our
                    <Link href="/insurance" className="text-dental-primary hover:underline ml-1">
                      insurance page
                    </Link> for more details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
