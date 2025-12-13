import {
  Database,
  Code2,
  BarChart3,
  FileSpreadsheet,
  BrainCircuit,
  GitBranch,
  Github,
  LineChart,
} from "lucide-react";

export const marqueeSkills = [
  { label: "SQL", icon: Database },
  { label: "Python", icon: Code2 },
  { label: "Power BI", icon: BarChart3 },
  { label: "Excel", icon: FileSpreadsheet },
  { label: "AI / ML", icon: BrainCircuit },
  { label: "Git", icon: GitBranch },
  { label: "GitHub", icon: Github },
  { label: "Data Viz", icon: LineChart },
];



export const skillSections = [
  {
    title: "Data & SQL",
    skills: [
      "SQL (joins, CTEs, window functions)",
      "Relational databases (PostgreSQL, MySQL, SQL Server)",
      "Data modeling & query optimization",
    ],
  },
  {
    title: "Python & Analytics",
    skills: [
      "Python (pandas, NumPy, matplotlib, seaborn)",
      "Data cleaning & exploratory data analysis (EDA)",
      "Scikit-learn for ML workflows",
      "Jupyter Notebooks & VS Code",
    ],
  },
  {
    title: "BI & Data Visualization",
    skills: [
      "Power BI (data modeling, DAX, Power Query)",
      "Dashboard design & storytelling with data",
      "Tableau / Excel charts & dashboards",
    ],
  },
  {
    title: "Excel & Automation",
    skills: [
      "Advanced Excel (PivotTables, Power Query, Power Pivot)",
      "Formulas & functions (LOOKUP, INDEX/MATCH, etc.)",
      "Macros / VBA & process automation",
      "Python scripting & basic RPA tools",
    ],
  },
  {
    title: "AI, ML & Statistics",
    skills: [
      "Descriptive & inferential statistics, A/B testing",
      "Supervised & unsupervised learning",
      "Feature engineering & model evaluation",
      "Basic deployment & MLOps awareness",
    ],
  },
  {
    title: "Engineering & Collaboration",
    skills: [
      "Git & GitHub (branching, PRs, code reviews)",
      "ETL / data pipelines fundamentals",
      "Cloud basics (AWS)",
      "Stakeholder communication & data storytelling",
    ],
  },
];