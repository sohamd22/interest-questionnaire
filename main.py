import pandas as pd

# Load the CSV file with responses
df = pd.read_csv('responses.csv')

''''
What type of problems do you enjoy solving the most?

A. Building applications and software
B. Analyzing data and finding insights
C. Protecting systems and data from security threats
D. Developing intelligent systems and algorithms
E. Designing user interfaces and improving user experience
Which programming language do you prefer to work with?

A. Java, C#, or C++
B. Python or R
C. Python or Go
D. Python, Prolog, or LISP
E. JavaScript, HTML, or CSS
What kind of projects do you find most exciting?

A. Developing software applications
B. Performing data analysis and visualization
C. Implementing security measures and protocols
D. Creating machine learning models
E. Designing and developing websites
Which of the following tasks do you enjoy the most?

A. Writing and testing code
B. Cleaning and processing data
C. Penetration testing and ethical hacking
D. Training and optimizing algorithms
E. Crafting user-friendly designs
What do you like to read or learn about in your free time?

A. Software development methodologies and tools
B. Data science techniques and tools
C. Cybersecurity trends and best practices
D. Advances in artificial intelligence and robotics
E. New web design trends and UX principles
Which tools or environments do you prefer working in?

A. Integrated Development Environments (IDEs) like IntelliJ IDEA or Visual Studio
B. Data analysis tools like Jupyter Notebook or RStudio
C. Security tools like Wireshark or Metasploit
D. Machine learning libraries like TensorFlow or PyTorch
E. Web development tools like VS Code or Adobe XD
How do you prefer to work on projects?

A. Collaboratively in a team, focusing on coding and development
B. Independently analyzing data and generating reports
C. Conducting security assessments and advising teams on security
D. Researching and experimenting with new algorithms
E. Working closely with designers and developers on front-end projects
What is your preferred mode of learning?

A. Coding bootcamps or software development courses
B. Data science MOOCs or certification courses
C. Cybersecurity workshops and certifications
D. AI/ML online courses and research papers
E. Web design and front-end development tutorials
Which career path excites you the most?

A. Software Engineer/Developer
B. Data Scientist/Analyst
C. Cybersecurity Specialist
D. AI/ML Engineer
E. Web Developer/Designer
What type of companies or industries do you want to work in?

A. Software companies or tech startups
B. Analytics firms or research institutions
C. Security agencies or financial institutions
D. AI-focused companies or research labs
E. Digital agencies or e-commerce companies
'''

# Define a mapping for the domains
domain_mapping = {
    'A': 'Software Development',
    'B': 'Data Science',
    'C': 'Cybersecurity',
    'D': 'Artificial Intelligence',
    'E': 'Web Development'
}

# Function to determine the domain based on responses
def determine_domain(responses):
    counts = responses.value_counts()
    most_common = counts.idxmax()
    return domain_mapping[most_common]

# Apply the function to each row in the DataFrame
df['Recommended Domain'] = df.apply(determine_domain, axis=1)

# Save the results to a new CSV file
df.to_csv('domain_recommendations.csv', index=False)

print(df[['Recommended Domain']].head())
