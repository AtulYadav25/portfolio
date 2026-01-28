# DevFlow

A developer productivity tool for managing workflows, code snippets, and project documentation.

## Overview

DevFlow helps developers streamline their daily workflows by providing a centralized hub for code snippets, project notes, and task management. It integrates with popular tools and provides smart suggestions based on your work patterns.

## Features

- **Code Snippet Management**: Save and organize code snippets with syntax highlighting
- **Project Documentation**: Create and maintain project documentation
- **Task Tracking**: Built-in task management with GitHub integration
- **Smart Search**: AI-powered search across all your content
- **Team Collaboration**: Share snippets and docs with team members

## Technical Details

Built with:

- Next.js 14 with App Router
- Prisma ORM with PostgreSQL
- Redis for caching and real-time features
- Tailwind CSS for styling

## Architecture

The application follows a microservices architecture with separate services for:

1. Authentication and user management
2. Content storage and retrieval
3. Real-time collaboration
4. Search and indexing
