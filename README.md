# TechBridge Capstone: Smile Mart Assistant Chatbot

## Introduction
The TechBridge Capstone project introduces an innovative customer support solution for Smile Mart: the Smile Mart Assistant chatbot. This project leverages cutting-edge technologies to transform the customer support experience in the Smile Mart retail environment.



## Executive Summary

Our project aims to revolutionize customer support at Smile Mart using the Smile Mart Assistant chatbot. Developed with Azure Cognitive Services and Azure Spring Apps, this solution is designed to streamline customer service operations, reduce wait times, and provide 24/7 assistance. This leads to improved customer experience and satisfaction. Operating on Azure's Basic/Standard tier, our chatbot promises efficiency, scalability, and adaptability.


### Team Members:

- [Melissa Vargas](https://www.linkedin.com/in/melissa-vargas-57a96828a/)
- [Mary Nichols](https://www.linkedin.com/in/fuseboxradio/)
- [Gaetano Barreca](https://www.linkedin.com/in/gaetanobarreca/)
- [Kendall Drummond](https://www.linkedin.com/in/kendalldrummond/)
- [Kayla Thorne](https://www.linkedin.com/in/kaylthorne/)
- [Yvonne Sudlow](https://www.linkedin.com/in/yvonne-sudlow/)

## Technical Approach
We utilized Azure Cognitive Services for natural language processing, Azure Spring Apps for backend robustness, and GitHub Actions for continuous integration and deployment. This approach ensures a responsive, scalable, and secure chatbot solution.

## Integration with Azure Spring Boot
This project integrates with a separate repository that utilizes Azure Spring Boot for 
generating temporary tokens, enhancing the security of the Smile Mart Assistant chatbot. For 
more details on this security solution, visit the [Smile Mart Chatbot Security Upgrade 
Repository](https://github.com/gaebar/SmileMart-AssistantBot-AzureSpringApp).

## Preview

Experience the Smile Mart Chatbot in action:


![Smile Mart Chatbot Demo](src/images/SmileMart-Chatbot.gif)

For a more comprehensive view, check out the related video on YouTube:
[Watch the Video](https://youtu.be/b2gngfuUa4w)


### Chatbot Features

- **[QnA Maker](https://learn.microsoft.com/en-us/azure/ai-services/qnamaker/overview/overview):** Powers chatbot's understanding and response to customer queries.
- **[Azure Service Language](https://language.cognitive.azure.com/):** Enhances natural language processing capabilities, allowing the chatbot to interpret and understand user queries more effectively.
- **[GitHub Actions](https://docs.github.com/actions):** Facilitates streamlined deployment 
  workflows.

### Backend Development:

- **Language** Java for backend logic.
- **[Azure Spring Apps (ASA)](https://learn.microsoft.com/en-us/azure/spring-apps/how-to-github-actions?pivots=programming-language-java):** Used for secure token generation and management.
- **Hosting:** GitHub Pages for accessibility and visibility.

### Technical Limitations and Future Upgrades:

- Currently limited to Azure Basic/Standard tier, with plans to evaluate upgrades for expanded 
capabilities.
- Development roadmap includes incorporating additional Azure services for a more personalized 
  user experience.

## Business Case

The Assistant Chatbot acts as a virtual customer service representative, capable of handling a wide
array of customer inquiries without human intervention, allowing Smile Mart to allocate human
resources more effectively and improving operational efficiency.

## Development and Deployment Guide
This guide provides step-by-step instructions for setting up and deploying the chatbot solution.

### Initial Findings and Direction
Identifying core customer service challenges and establishing objectives for the chatbot.

### In-Depth Development
Creating a responsive and accurate chatbot, integrating with Smile Mart systems, and iterating through various designs.

#### Deployment Steps
1. Custom QnA Chatbot: Set up using the Azure portal. [Azure Chatbot Tutorial](https://learn.microsoft.com/en-gb/azure/ai-services/QnAMaker/Quickstarts/create-publish-knowledge-base)
2. Backend Deployment: Using Azure Spring Apps.
3. CI/CD Pipeline: Implementing GitHub Actions for automated deployment.


## Further Reading & Resources

Explore these additional resources to understand the technical details and broader context of our
project:

- [Explore Smile Mart's Official Website](https://gaebar.github.io/SmileMart-Store-Landing-Page/src/)
- [Capstone Presentation Slides](https://docs.google.com/presentation/d/1eW7YJNQbCQb7Fc7HsP4Mzt9CcL6W3KYhGyr7uj0Tf6o/edit#slide=id.g297f2fe054d_0_31)
- [Smile Mart Assistant Chatbot: A Comprehensive TechBridge Capstone Guide](https://docs.google.com/document/d/1Zer5HqsXGsC6Ndwt6GPSG1jXx3tcFMcpLHAj9-KNTG0/edit?usp=sharing)
- [Advancing Smile Mart with Chatbot Technology: A Sales Proposal](https://docs.google.com/document/d/1E9JNDBn6E5Rx3ibJqEAh2dg1lhhSmmSAFYrDE9_ytpE/edit?usp=sharing)
- [Azure Cognitive Services Documentation](https://docs.microsoft.com/azure/cognitive-services/)
- [Azure Spring Apps Documentation](https://docs.microsoft.com/azure/spring-apps/)

## Acknowledgments

Special thanks to the TechBridge team, Sam's Club Technology, and all stakeholders for their invaluable feedback and support throughout the project lifecycle.
