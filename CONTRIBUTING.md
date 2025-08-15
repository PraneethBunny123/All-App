# Contributing to All App

Thank you for your interest in contributing! 🎉  

**All App** is an open-source collection of **mini React projects and reusable components** that demonstrate important React concepts.  
The goal is to create a **learning playground** where anyone can explore, improve, and add new concepts.

We welcome:
- New concepts/components
- Improvements to existing demos
- Accessibility, performance, and code readability fixes
- Documentation updates

---

## 🚀 How to Contribute

1. **Fork the repo**  
   - Click the “Fork” button at the top right of this repository on GitHub.

2. **Clone your fork** to your local machine:  
   ```bash
   git clone https://github.com/<your-username>/all-app.git
   # or with SSH
   git clone git@github.com:<your-username>/all-app.git
   
3. **Create a new branch for your work**  
   ```bash
   git checkout -b feature/<your-concept-name>

4. **Add your concept under:**
   - Export a main component (`index.jsx` or `<YourConcept>.jsx`).
   - Keep the code focused and well-named.
   - Add short usage notes as comments if helpful.

5. **Register it in `src/App.js` for testing:**
   - Import your component.
   - Uncomment it to preview in the browser.

6. **Commit and Push your changes:**
   ```bash
   git add .
   git commit -m "feat: add <YourConcept> demo"
   git push origin feature/<your-concept-name>
7. **Open a Pull Request (PR) from your branch to main:**
   - Clear title (e.g., feat: add InfiniteScroll demo)
   - Short description of what/why
8. **PR Guidelines:**
   - Keep PRs small and focused.
   - Prefer reusable components (use props instead of hardcoding).
   - Add basic error handling and accessibility where possible.
   - If you change existing code, explain why (performance, bug fix, readability, etc.).
9. **Ideas for New Concepts:**
    - Form with validation (React Hook Form / Zod)
    - Modren Data fetching patterns (eg: React Query)
    - Error boundaries & Suspense
    - Accessibility examples (focus trap, ARIA)
    - Many more ...

## Final Note

Every contribution, no matter how small, helps make this project better. Open an issue before starting if you want feedback on your idea.
We appreciate your time and effort in helping All App grow into a great learning resource for React developers.
