# <p align="center">WingPilot: Effortless Data Management With Suggestion</p>

Simplify your data management experience with WingPilot, a versatile tool designed to streamline interaction with employee datasets. WingPilot offers intuitive features for discussing insights, adding new employees, and removing outdated information, all through a user-friendly chat interface powered by Copilot Kit.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation & Running Project](#installation--running-project)
- [Contributing](#contributing)
- [License](#license)

## Features

**Efficient Employee Data Management: Simplify Your Data Handling**

WingPilot streamlines the management of employee data, offering a user-friendly interface for effortless interaction. Whether it's adding, deleting, or discussing insights, WingPilot ensures a smooth experience, reducing complexity and enhancing productivity.

---

**Smart Record Creation with Suggestions: Streamline Data Entry**

WingPilot integrates intelligent suggestions into the record creation process, providing users with helpful prompts to populate employee records accurately. By leveraging smart suggestions, WingPilot minimizes manual effort and ensures data completeness and accuracy.


## Demo
<!-- demo link -->

https://github.com/SauravKumarMahato/WingPilot/assets/83631265/cda82d7e-d103-434a-8b35-1a5d676f6f9f


## Installation & Running Project

### Setup

1. Clone the repository:

```bash
git clone https://github.com/SauravKumarMahato/WingPilot.git
```

2. Navigate to the cloned directory:

```bash
cd WingPilot/wingpilot
```

3. Add your OpenAI API key

Add your environment variables to `.env.local` inside this directory WingPilot/wingpilot/.env.local 

```
OPENAI_API_KEY=your-api-key
```

3. Install the required dependencies:

```bash
yarn install 
```


4. Finally running the Projet. 

```bash
yarn run dev
```

### The Copilot-Specific parts of the code:

1. Notice `<CopilotKit />` and `<CopilotSidebar />` in `layout.tsx`

2. Notice `useCopilotReadable`  and `useCopilotAction` in `Table/page.tsx` 

3. Notice  `<CopilotTextarea />` in `Table/Form.tsx`

## Contributing

We encourage contributions to enhance and elevate [WingPilot](https://github.com/SauravKumarMahato/WingPilot.git). Don't hesistate to submit issues, suggest new features, or initiate pull requests. Kindly follow our Code of Conduct for a respectful and collaborative environment.

## License

This project is licensed under the [MIT License](/LICENSE).
