const Testimonials = () => {
    return (
            <div>
              <section id="testimonials" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      Trusted by <span className="text-primary">Competitive Programmers</span>
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                      Don't just take our word for it. Here's what our users say:
                    </p>
                  </div>
        
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        name: "Alex Chen",
                        title: "ICPC World Finalist",
                        quote: "CP Input Gen saved me at least 5 minutes per problem in the last competition. That's huge when every second counts!",
                        rating: 5,
                      },
                      {
                        name: "Priya Sharma",
                        title: "Codeforces Master",
                        quote: "I used to make so many input parsing mistakes. Since using this extension, my submission accuracy has improved dramatically.",
                        rating: 5,
                      },
                      {
                        name: "David Kim",
                        title: "Google Code Jam Participant",
                        quote: "The customization options are fantastic. I can create templates for my specific coding style and reuse them across competitions.",
                        rating: 4,
                      },
                    ].map((testimonial, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                      >
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                        <div className="flex items-center">
                          <img
                            className="h-12 w-12 rounded-full"
                            src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 10}.jpg`}
                            alt={testimonial.name}
                          />
                          <div className="ml-4">
                            <p className="font-bold text-gray-900">{testimonial.name}</p>
                            <p className="text-gray-600">{testimonial.title}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
              </div>
    )

}