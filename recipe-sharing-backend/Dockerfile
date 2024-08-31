# Use a Java runtime image
FROM openjdk:17-jdk-buster

# Set the working directory in the container
WORKDIR /app

# Copy the built JAR file to the container
COPY target/*.jar app.jar

# Expose the port the app runs on
EXPOSE 5454

# Run the JAR file
ENTRYPOINT ["java","-jar","app.jar"]
