# Use the official Node.js image as the base image
FROM node:20-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install pnpm and dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN pnpm run build

# Use a lighter image for the final stage
FROM node:20-alpine AS runner

# Set the working directory in the container
WORKDIR /app

# Copy the built files and dependencies from the builder stage
COPY --from=builder /app ./

# Expose the port on which the app will run
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
