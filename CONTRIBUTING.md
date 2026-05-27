# Contributing to GAMEOPZ

We appreciate your interest in contributing to GAMEOPZ! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful, inclusive, and professional. We're building a community where everyone feels welcome.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/GAMEOPs.git`
3. Add upstream remote: `git remote add upstream https://github.com/HARSHILPATEL2005/GAMEOPs.git`
4. Create a feature branch: `git checkout -b feature/your-feature-name`

## Development Setup

See the README.md for detailed setup instructions.

## Coding Standards

### JavaScript/Node.js
- Use ES6+ features
- Follow ESLint configuration
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### React/Next.js
- Use functional components with hooks
- Follow component composition patterns
- Keep components reusable
- Prop validation with PropTypes or TypeScript

### Database
- Follow schema design patterns
- Add proper indexes for performance
- Use transactions for multi-document operations

## Commit Messages

Follow conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**: feat, fix, docs, style, refactor, test, chore, perf

**Example**: `feat(auth): add JWT token refresh mechanism`

## Pull Request Process

1. Update your branch with latest changes: `git fetch upstream && git rebase upstream/main`
2. Push to your fork
3. Create a Pull Request with:
   - Clear title describing the changes
   - Description of what changed and why
   - Reference any related issues (#123)
   - Screenshots for UI changes
4. Address review comments
5. Ensure all checks pass

## Testing Requirements

- Write tests for new features
- Ensure all tests pass: `npm test`
- Aim for >80% code coverage
- Test edge cases and error scenarios

## Documentation

- Update README.md if adding features
- Add code comments for complex logic
- Document API endpoints in comments
- Update CHANGELOG.md

## Questions?

Open an issue with the `question` label or reach out to the maintainers.

Thank you for contributing! 🙏
