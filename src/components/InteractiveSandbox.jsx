import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import {
  FaTerminal,
  FaRobot,
  FaBrain,
  FaSpinner,
  FaPaperPlane,
  FaClock,
  FaHistory,
  FaCheckCircle,
  FaExclamationTriangle,
  FaChartLine,
  FaTrash,
} from "react-icons/fa";

export default function InteractiveSandbox() {
  const [activeTab, setActiveTab] = useState("api");

  return (
    <section id="sandbox" className="max-w-6xl mx-auto px-5 sm:px-6 py-20 sm:py-24 scroll-mt-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-[130px] pointer-events-none" />

      <div className="text-center mb-12 sm:mb-14 relative z-10">
        <ScrollReveal>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-100/70 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/20 rounded-full mb-3 uppercase">
            <FaTerminal size={11} />
            <span>Interactive Simulator</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Interactive Project Sandbox
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Experience the core runtime logic of my applications in real-time. Toggle the modules below to test mock APIs, algorithmic psychology diagnostics, and computer vision models.
          </p>
        </ScrollReveal>
      </div>

      {/* Interactive Tabs Menu */}
      <ScrollReveal delay={100}>
        <div className="flex justify-center p-1.5 bg-white dark:bg-[#16161e] rounded-xl max-w-md mx-auto mb-8 sm:mb-10 border-2 border-slate-900 dark:border-slate-400 shadow-hard-sm relative z-10">
          <button
            onClick={() => setActiveTab("api")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
              activeTab === "api"
                ? "bg-amber-400 text-slate-950 border-2 border-slate-900 shadow-hard-sm"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <FaTerminal size={13} />
            <span>API Client</span>
          </button>
          <button
            onClick={() => setActiveTab("fin")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
              activeTab === "fin"
                ? "bg-amber-400 text-slate-950 border-2 border-slate-900 shadow-hard-sm"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <FaBrain size={13} />
            <span>FinPsych</span>
          </button>
          <button
            onClick={() => setActiveTab("krishi")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
              activeTab === "krishi"
                ? "bg-amber-400 text-slate-950 border-2 border-slate-900 shadow-hard-sm"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <FaRobot size={13} />
            <span>KrishiMitra</span>
          </button>
        </div>
      </ScrollReveal>

      {/* Sandbox Containment Card */}
      <ScrollReveal delay={200}>
        <div className="rounded-2xl border-2 border-slate-900 dark:border-slate-400 shadow-hard overflow-hidden min-h-[460px] bg-white dark:bg-[#16161e] relative z-10">
          {activeTab === "api" && <ApiSandbox />}
          {activeTab === "fin" && <FinPsychSandbox />}
          {activeTab === "krishi" && <KrishiMitraSandbox />}
        </div>
      </ScrollReveal>
    </section>
  );
}

// -------------------------------------------------------------
// 1. API PLAYGROUND SANDBOX
// -------------------------------------------------------------
function ApiSandbox() {
  const [method, setMethod] = useState("GET");
  const [endpoint, setEndpoint] = useState("/api/v1/projects");
  const [requestBody, setRequestBody] = useState('{\n  "name": "Visitor API Test",\n  "status": "active"\n}');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [history, setHistory] = useState([
    { method: "GET", endpoint: "/api/v1/profile", status: 200, time: "10:12" },
  ]);

  const handleSend = () => {
    setIsLoading(true);
    const start = performance.now();

    setTimeout(() => {
      let data = {};
      let status = 200;
      const latency = Math.round(performance.now() - start + 80);

      try {
        if (endpoint === "/api/v1/projects") {
          if (method === "GET") {
            data = {
              success: true,
              count: 3,
              projects: [
                { id: "api-play", name: "API Playground", status: "completed" },
                { id: "finpsych", name: "FinPsych Analyzer", status: "completed" },
                { id: "krishi", name: "KrishiMitra AI", status: "production" },
              ],
            };
          } else if (method === "POST") {
            const body = JSON.parse(requestBody);
            data = {
              success: true,
              message: "Project mocked successfully!",
              createdItem: body,
            };
            status = 201;
          } else {
            data = { success: true, message: `Mocked ${method} request successfully.` };
          }
        } else if (endpoint === "/api/v1/profile") {
          data = {
            name: "Aamir Khan",
            title: "Software Engineer",
            location: "Uttar Pradesh, India",
            github: "github.com/Khan786-Aamir",
            email: "aamir706056@gmail.com",
          };
        } else if (endpoint === "/api/v1/feedback") {
          if (method === "POST") {
            const body = JSON.parse(requestBody);
            data = {
              success: true,
              status: "delivered",
              received: body,
              note: "Thanks for trying Aamir's portfolio sandbox!",
            };
            status = 201;
          } else {
            data = { error: "Method Not Allowed. Use POST to send feedback." };
            status = 405;
          }
        } else {
          data = { error: "Resource not found on mock server.", path: endpoint };
          status = 404;
        }
      } catch (err) {
        data = { error: "Malformed JSON payload in request body.", details: err.message };
        status = 400;
      }

      setResponse({ status, data, latency });
      setIsLoading(false);

      const now = new Date();
      const timeStr = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;

      setHistory((prev) => [
        { method, endpoint, status, time: timeStr },
        ...prev.slice(0, 4),
      ]);
    }, 600);
  };

  const loadHistoryItem = (item) => {
    setMethod(item.method);
    setEndpoint(item.endpoint);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 text-slate-200">
      {/* Control console */}
      <div className="lg:col-span-7 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <FaTerminal />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">API Playground</h3>
              <p className="text-xs text-slate-400">Live Mock API Client Environment</p>
            </div>
          </div>

          {/* Request URL Input Group */}
          <div className="flex flex-col sm:flex-row gap-2 mb-5">
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-white/10 bg-[#060a17] text-xs sm:text-sm font-semibold text-cyan-400 focus:outline-none focus:border-cyan-400 w-full sm:w-28"
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>

            <select
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              className="flex-grow px-3 py-2.5 rounded-xl border border-white/10 bg-[#060a17] text-xs sm:text-sm font-mono text-slate-200 focus:outline-none focus:border-cyan-400 min-w-0"
            >
              <option value="/api/v1/projects">/api/v1/projects</option>
              <option value="/api/v1/profile">/api/v1/profile</option>
              <option value="/api/v1/feedback">/api/v1/feedback</option>
              <option value="/api/v1/nonexistent">/api/v1/nonexistent</option>
            </select>

            <button
              onClick={handleSend}
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] disabled:opacity-75 cursor-pointer"
            >
              {isLoading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <FaPaperPlane size={11} />
              )}
              <span>Send</span>
            </button>
          </div>

          {/* Request Payload Area (only if POST/PUT) */}
          {method === "POST" || method === "PUT" ? (
            <div className="mb-4">
              <label className="block text-xs font-semibold text-slate-400 mb-2">
                Request JSON Body Payload
              </label>
              <textarea
                value={requestBody}
                onChange={(e) => setRequestBody(e.target.value)}
                rows={4}
                className="w-full font-mono text-xs p-3.5 rounded-xl border border-white/10 bg-[#060a17] text-cyan-300 focus:outline-none focus:border-cyan-400 resize-none"
              />
            </div>
          ) : (
            <div className="p-3.5 rounded-xl border border-dashed border-white/10 text-center text-xs text-slate-400 mb-4 bg-white/[0.02]">
              HTTP GET request does not require a payload body. Ready to fetch mock metadata.
            </div>
          )}
        </div>

        {/* History log drawer */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
              <FaHistory size={11} className="text-cyan-400" />
              <span>Query History</span>
            </span>
            {history.length > 0 && (
              <button
                onClick={clearHistory}
                className="text-[10px] text-rose-400 hover:underline flex items-center gap-1"
              >
                <FaTrash size={8} /> Clear
              </button>
            )}
          </div>
          {history.length === 0 ? (
            <p className="text-xs text-slate-500 italic">No queries executed yet.</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {history.map((hist, i) => (
                <button
                  key={i}
                  onClick={() => loadHistoryItem(hist)}
                  className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-[10px] sm:text-xs font-mono transition-colors"
                >
                  <span
                    className={`font-extrabold ${
                      hist.status >= 400
                        ? "text-rose-400"
                        : hist.status >= 201
                        ? "text-emerald-400"
                        : "text-cyan-400"
                    }`}
                  >
                    {hist.method}
                  </span>
                  <span className="text-slate-300 truncate max-w-[110px]">{hist.endpoint}</span>
                  <span className="text-slate-500">{hist.status}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Response viewer */}
      <div className="lg:col-span-5 p-5 sm:p-6 bg-[#060a17]/95 flex flex-col justify-between min-h-[360px]">
        <div>
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
            <span className="text-xs font-semibold text-cyan-400 font-mono tracking-wider">RESPONSE</span>
            {response && (
              <div className="flex gap-3 text-[10px] font-mono">
                <span className="flex items-center gap-1 text-slate-400">
                  <FaClock size={9} />
                  {response.latency}ms
                </span>
                <span
                  className={`px-2 py-0.5 rounded font-bold ${
                    response.status >= 400
                      ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                      : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  }`}
                >
                  Status: {response.status}
                </span>
              </div>
            )}
          </div>

          <div className="overflow-auto max-h-[300px]">
            {response ? (
              <pre className="text-xs font-mono text-emerald-300 leading-relaxed text-left overflow-x-auto">
                {JSON.stringify(response.data, null, 2)}
              </pre>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-slate-500 text-center font-mono">
                <FaTerminal size={24} className="mb-3 animate-pulse text-cyan-500/50" />
                <p className="text-xs text-slate-400">Console Idle.</p>
                <p className="text-[10px] text-slate-500">Send a request to see output payload.</p>
              </div>
            )}
          </div>
        </div>

        {response && (
          <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-slate-400 text-center font-mono flex items-center justify-center gap-1.5">
            <FaCheckCircle className="text-emerald-400" /> Output parsed successfully (JSON representation)
          </div>
        )}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. FINPSYCH BEHAVIORAL FINANCES
// -------------------------------------------------------------
function FinPsychSandbox() {
  const [income, setIncome] = useState("45000");
  const [spent, setSpent] = useState("12000");
  const [category, setCategory] = useState("Dining Out");
  const [mood, setMood] = useState("Stressed");
  const [isScanning, setIsScanning] = useState(false);
  const [report, setReport] = useState(null);

  const calculatePsychology = () => {
    setIsScanning(true);
    setTimeout(() => {
      const incNum = parseFloat(income) || 1;
      const spentNum = parseFloat(spent) || 0;
      const savingsRate = Math.round(((incNum - spentNum) / incNum) * 100);

      let coefficient = 0;
      let diagnosis = "";
      let rating = "";
      let actionPlan = [];

      if (mood === "Stressed") {
        coefficient = 75;
        diagnosis = "Cortisol-Driven Compensatory Spending";
        rating = "Moderate Impulsivity Risk";
        actionPlan = [
          "Implement the 48-Hour cool-off rule for non-essential purchases.",
          "Redirect stress responses to non-monetary activities like exercise.",
          "Set up automated saving allocations on salary day before it is spent.",
        ];
      } else if (mood === "Impulsive") {
        coefficient = 92;
        diagnosis = "Dopamine Loop Shopping Trap";
        rating = "High Impulsivity Risk";
        actionPlan = [
          "Delete saved credit card details from ecommerce portals.",
          "Restrict category limits explicitly using a strict budget tool.",
          "Introduce a friction lock: Wait 24 hours before purchases.",
        ];
      } else if (mood === "Bored") {
        coefficient = 65;
        diagnosis = "Sensation-Seeking Hobby Spending";
        rating = "Mild Impulsivity Risk";
        actionPlan = [
          "Audit subscriptions; bored individuals subscribe to streaming portals impulsively.",
          "Find free alternative dopamine boosts like learning programming modules.",
          "Commit to a 'No-Spend Week' challenge every month.",
        ];
      } else {
        coefficient = 25;
        diagnosis = "Healthy Financial Cognition Flow";
        rating = "Excellent Balance Behavior";
        actionPlan = [
          "Continue allocating planned savings rates to liquid funds.",
          "Audit investments monthly.",
          "Allocate a tiny guilt-free spending pocket to reward yourself.",
        ];
      }

      if (savingsRate < 10) {
        coefficient = Math.min(100, coefficient + 12);
        rating = "Severe Budget Compression Risk";
      }

      setReport({
        savingsRate,
        coefficient,
        diagnosis,
        rating,
        actionPlan,
      });
      setIsScanning(false);
    }, 700);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 text-slate-200">
      <div className="lg:col-span-7 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <FaBrain />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">FinPsych Mind Analyzer</h3>
              <p className="text-xs text-slate-400">Cognitive psychology behind spending habits</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                Monthly Income (₹ / $)
              </label>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-white/10 bg-[#060a17] text-sm font-medium text-white focus:outline-none focus:border-violet-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                Amount to Spend (₹ / $)
              </label>
              <input
                type="number"
                value={spent}
                onChange={(e) => setSpent(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-white/10 bg-[#060a17] text-sm font-medium text-white focus:outline-none focus:border-violet-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                Expense Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-white/10 bg-[#060a17] text-sm font-medium text-white focus:outline-none focus:border-violet-400"
              >
                <option value="Dining Out">Dining Out / Food</option>
                <option value="Gaming">Gaming / Entertainment</option>
                <option value="Apparel">Shopping / Clothes</option>
                <option value="Subscriptions">Subscriptions / Apps</option>
                <option value="Utility">Unplanned Utilities</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                Current Psychological Mood
              </label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-white/10 bg-[#060a17] text-sm font-medium text-white focus:outline-none focus:border-violet-400"
              >
                <option value="Stressed">Stressed / Exhausted</option>
                <option value="Bored">Bored / Restless</option>
                <option value="Impulsive">Impulsive / Excited</option>
                <option value="Calm">Calm / Rational</option>
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={calculatePsychology}
          disabled={isScanning}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer mt-4"
        >
          {isScanning ? (
            <>
              <FaSpinner className="animate-spin" />
              <span>Analyzing Financial Brainwaves...</span>
            </>
          ) : (
            <>
              <FaBrain size={14} />
              <span>Analyze Psychology Report</span>
            </>
          )}
        </button>
      </div>

      <div className="lg:col-span-5 p-5 sm:p-6 bg-[#060a17]/95 flex flex-col justify-between min-h-[380px]">
        <div>
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider block mb-4 font-mono">
            Cognitive Diagnostics
          </span>

          {report ? (
            <div className="space-y-4 text-left">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white">{report.diagnosis}</h4>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block mt-1 ${
                      report.coefficient > 70
                        ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                        : report.coefficient > 40
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                        : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    }`}
                  >
                    {report.rating}
                  </span>
                </div>

                <div className="text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-black text-violet-400">{report.coefficient}</span>
                    <span className="text-[10px] text-slate-400 font-semibold font-mono">DOPAMINE</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-xs font-bold text-slate-300 block mb-2 flex items-center gap-1.5">
                  <FaChartLine size={10} className="text-violet-400" />
                  <span>Cognitive Action Plan:</span>
                </span>
                <ul className="text-xs text-slate-300/90 list-disc list-outside pl-4 space-y-1.5">
                  {report.actionPlan.map((action, index) => (
                    <li key={index} className="leading-relaxed">
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-slate-500 text-center">
              <FaChartLine size={24} className="mb-3 animate-pulse text-violet-500/50" />
              <p className="text-xs font-semibold text-slate-400">Scanner Standing By.</p>
              <p className="text-[10px] text-slate-500 max-w-xs mt-1">Configure budget values and current mood, then click analyze.</p>
            </div>
          )}
        </div>

        {report && (
          <div className="text-[10px] text-slate-400 text-center font-mono mt-4 flex items-center justify-center gap-1.5">
            <FaCheckCircle className="text-emerald-400" /> Behavioral profile computed: savings rate is {report.savingsRate}%
          </div>
        )}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 3. KRISHIMITRA AI BOTANICAL SCANNER
// -------------------------------------------------------------
function KrishiMitraSandbox() {
  const [crop, setCrop] = useState("Wheat");
  const [symptom, setSymptom] = useState("Rust Spots");
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState(null);
  const [progress, setProgress] = useState(0);

  const triggerScan = () => {
    setIsScanning(true);
    setProgress(0);
    setResults(null);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 12;
      });
    }, 100);

    setTimeout(() => {
      let infection = "";
      let confidence = 0;
      let details = "";
      let actionSteps = [];

      if (crop === "Wheat") {
        if (symptom === "Rust Spots") {
          infection = "Puccinia Graminis (Stem Rust)";
          confidence = 94.7;
          details = "Fungal infection which destroys crop yields. Active rust spores spread rapidly through wind.";
          actionSteps = [
            "Apply propiconazole or tebuconazole fungicides at early detection.",
            "Reduce leaf humidity by scheduling early morning drip irrigation.",
            "Choose rust-resistant cultivars in the next planting cycle.",
          ];
        } else if (symptom === "Yellowing") {
          infection = "Nitrogen Deficiency & Moisture Stress";
          confidence = 88.2;
          details = "Inadequate nitrogen content in root soil alongside irregular watering cycles.";
          actionSteps = [
            "Incorporate urea top-dressing at 40-50 kg/hectare.",
            "Conduct a soil nitrate saturation test.",
            "Normalize watering to maintain deep soil humidity.",
          ];
        } else {
          infection = "Septoria Tritici Leaf Blotch";
          confidence = 82.5;
          details = "Rain-splashed fungal pathogen causing necrotic lesions on lower wheat leaves.";
          actionSteps = [
            "Prune infected leaf canopy structure to boost airflow.",
            "Apply preventative triazole fungicides.",
            "Avoid sprinkler irrigation systems.",
          ];
        }
      } else if (crop === "Rice") {
        if (symptom === "Rust Spots") {
          infection = "Rice Blast (Pyricularia Oryzae)";
          confidence = 91.3;
          details = "Highly volatile fungal spores causing diamond-shaped lesions on leaves and nodes.";
          actionSteps = [
            "Avoid over-application of nitrogenous fertilizers.",
            "Apply systemic fungicides like Tricyclazole.",
            "Maintain proper water depth in fields to limit pathogen expansion.",
          ];
        } else if (symptom === "Yellowing") {
          infection = "Rice Tungro Virus (RTV)";
          confidence = 79.8;
          details = "Viral infection spread by green leafhopper vectors causing stunted growth.";
          actionSteps = [
            "Vector control: Apply targeted insecticides against leafhoppers.",
            "Eradicate virus-infected rice stumps instantly.",
            "Utilize tungro-resistant varieties.",
          ];
        } else {
          infection = "Bacterial Leaf Blight (BLB)";
          confidence = 86.4;
          details = "Systemic bacterial pathogen spreading through tissue wounds in flooded environments.";
          actionSteps = [
            "Drain fields to reduce standing humidity pools.",
            "Spray copper hydroxide mixtures.",
            "Enforce crop rotation and field sanitation.",
          ];
        }
      } else {
        if (symptom === "Rust Spots") {
          infection = "Alternaria Leaf Spot";
          confidence = 89.1;
          details = "Brown spots with concentric rings appearing during late season humidity spikes.";
          actionSteps = [
            "Ensure potash fertilizers are applied at adequate volumes.",
            "Spray Copper Oxychloride fungicides if symptoms spread.",
            "Plow down infected cotton residues deep after harvest.",
          ];
        } else if (symptom === "Yellowing") {
          infection = "Magnesium Deficient Canopy Chlorosis";
          confidence = 84.6;
          details = "Magnesium exhaustion causing interveinal chlorosis on older cotton leaves.";
          actionSteps = [
            "Apply Epsom salt (Magnesium sulfate) foliar spray.",
            "Add dolomite limestone to adjust soil pH and magnesium levels.",
            "Audit irrigation drainage.",
          ];
        } else {
          infection = "Fusarium Wilt (Fov Pathogen)";
          confidence = 92.1;
          details = "Soil-borne fungal pathogen invading cotton root systems and restricting water flow.";
          actionSteps = [
            "Rotate crops with non-hosts like maize or grain sorghum.",
            "Apply soil solarization methods on seedbeds.",
            "Upgrade soil drainage capacity.",
          ];
        }
      }

      setResults({
        infection,
        confidence,
        details,
        actionSteps,
      });
      setIsScanning(false);
    }, 1100);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 text-slate-200">
      <div className="lg:col-span-7 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <FaRobot />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">KrishiMitra AI Hub</h3>
              <p className="text-xs text-slate-400">Crop health diagnostics & botanical advisory</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                Target Crop Type
              </label>
              <select
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-white/10 bg-[#060a17] text-sm font-medium text-white focus:outline-none focus:border-emerald-400"
              >
                <option value="Wheat">Triticum Aestivum (Wheat)</option>
                <option value="Rice">Oryza Sativa (Rice)</option>
                <option value="Cotton">Gossypium (Cotton)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                Observed Symptom
              </label>
              <select
                value={symptom}
                onChange={(e) => setSymptom(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-white/10 bg-[#060a17] text-sm font-medium text-white focus:outline-none focus:border-emerald-400"
              >
                <option value="Rust Spots">Brown / Orange Rust Spots</option>
                <option value="Yellowing">Leaf Yellowing (Chlorosis)</option>
                <option value="Necrosis">Dry Leaf Margins & Necrosis</option>
              </select>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#060a17] border border-white/10 grid grid-cols-3 gap-2 mb-4 text-center">
            <div>
              <span className="block text-[10px] text-slate-400 font-semibold mb-0.5">SOIL MOISTURE</span>
              <span className="text-xs sm:text-sm font-bold text-emerald-400">Optimal (64%)</span>
            </div>
            <div className="border-x border-white/10">
              <span className="block text-[10px] text-slate-400 font-semibold mb-0.5">AIR TEMP</span>
              <span className="text-xs sm:text-sm font-bold text-white">28.4°C</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 font-semibold mb-0.5">WEATHER FEEDS</span>
              <span className="text-xs sm:text-sm font-bold text-cyan-400">Moderate Rain</span>
            </div>
          </div>
        </div>

        <div>
          {isScanning && (
            <div className="mb-4">
              <div className="flex justify-between items-center text-[10px] font-semibold text-emerald-400 mb-1.5">
                <span>AI MODEL HEURISTICS RUNNING...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#060a17] rounded-full overflow-hidden border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          <button
            onClick={triggerScan}
            disabled={isScanning}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
          >
            {isScanning ? (
              <>
                <FaSpinner className="animate-spin" />
                <span>Running Computer Vision Models...</span>
              </>
            ) : (
              <>
                <FaRobot size={14} />
                <span>Run AI Crop Diagnosis</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="lg:col-span-5 p-5 sm:p-6 bg-[#060a17]/95 flex flex-col justify-between min-h-[380px]">
        <div>
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-4 font-mono">
            AI Diagnosis Results
          </span>

          {results ? (
            <div className="space-y-4 text-left">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white">{results.infection}</h4>
                  <p className="text-[10px] text-slate-400 mt-1">{results.details}</p>
                </div>

                <div className="text-right flex-shrink-0">
                  <div className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-black font-mono">
                    {results.confidence}% CONF
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-xs font-bold text-slate-300 block mb-2 flex items-center gap-1.5">
                  <FaExclamationTriangle size={10} className="text-emerald-400" />
                  <span>Agricultural Advisory:</span>
                </span>
                <ul className="text-xs text-slate-300/90 list-disc list-outside pl-4 space-y-1.5">
                  {results.actionSteps.map((step, index) => (
                    <li key={index} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-slate-500 text-center">
              <FaRobot size={24} className="mb-3 animate-pulse text-emerald-500/50" />
              <p className="text-xs font-semibold text-slate-400">Diagnosis Console Standing By.</p>
              <p className="text-[10px] text-slate-500 max-w-xs mt-1">Select crop and observed symptoms, then click crop diagnosis.</p>
            </div>
          )}
        </div>

        {results && (
          <div className="text-[10px] text-slate-400 text-center font-mono mt-4 flex items-center justify-center gap-1.5">
            <FaCheckCircle className="text-emerald-400" /> Model analysis complete: 14 convolution layers executed
          </div>
        )}
      </div>
    </div>
  );
}
