import React from 'react';
import { Sparkles } from 'lucide-react';

const GradientBox = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative overflow-hidden rounded-xl p-[2px] shadow-md h-full bg-slate-50 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-red-200 opacity-40" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_30%,#0ea5e9_60%,#3b82f6_80%,#ef4444_100%)]" />
    <div className="relative z-10 bg-white rounded-[10px] h-full w-full px-5 py-3 flex items-center justify-between text-gray-800 font-medium">
      {children}
    </div>
  </div>
);

const NormalBox = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-[#f4f5f7] rounded-xl px-5 py-3 flex items-center text-gray-700 text-sm leading-relaxed shadow-sm h-full ${className}`}>
    {children}
  </div>
);

const LabelPill = ({ children }: { children: React.ReactNode }) => (
  <div className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 text-sm bg-white shadow-sm whitespace-nowrap">
    {children}
  </div>
);

const ArrowDown = () => (
  <svg className="w-full h-full" viewBox="0 0 224 40" preserveAspectRatio="none">
    <defs>
      <marker id="arrowhead-down" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af" />
      </marker>
    </defs>
    <path d="M 112 0 L 112 36" fill="none" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrowhead-down)" />
  </svg>
);

const ArrowRight = () => (
  <svg className="w-full h-full" viewBox="0 0 48 80" preserveAspectRatio="none">
    <defs>
      <marker id="arrowhead-right" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af" />
      </marker>
    </defs>
    <path d="M 0 40 L 44 40" fill="none" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrowhead-right)" />
  </svg>
);

const BracketArrow = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 320" preserveAspectRatio="none">
    <defs>
      <marker id="arrowhead-bracket" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af" />
      </marker>
    </defs>
    {/* Vertical spine connecting top and bottom */}
    <path d="M 0 40 L 32 40 L 32 280 L 0 280" fill="none" stroke="#9ca3af" strokeWidth="2" />
    {/* Middle connection to spine */}
    <path d="M 0 160 L 32 160" fill="none" stroke="#9ca3af" strokeWidth="2" />
    {/* Output arrow to the right */}
    <path d="M 32 160 L 60 160" fill="none" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrowhead-bracket)" />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-16 px-8 font-sans">
      <div className="w-full max-w-7xl overflow-x-auto pb-12">
        <div className="min-w-[1100px] flex flex-col items-center">
          
          <h2 className="text-3xl font-bold text-gray-800 mb-10 tracking-tight">Zhiyou 4.5 Pro Use Cases</h2>
          <div className="grid grid-cols-[10rem_2rem_14rem_3rem_16rem_4rem_16rem] gap-y-0 items-center w-full">
            
            {/* Row 1 */}
            <div className="col-start-3 h-20 py-2">
              <GradientBox>
                <span className="animate-pulse">Zhiyou 4.5 Pro Use case</span>
              </GradientBox>
            </div>

            {/* Row 2 */}
            <div className="col-start-3 h-10">
              <ArrowDown />
            </div>

            {/* Row 3 */}
            <div className="col-start-1 h-20 flex justify-end items-center pr-4">
              <LabelPill>Modality</LabelPill>
            </div>
            <div className="col-start-3 h-20 py-2">
              <NormalBox>Text, image</NormalBox>
            </div>
            <div className="col-start-4 h-20">
              <ArrowRight />
            </div>
            <div className="col-start-5 h-20 py-2">
              <NormalBox>
                <span>Audio, Video input<br/>Image generation...</span>
              </NormalBox>
            </div>

            {/* Row 4 */}
            <div className="col-start-3 h-10">
              <ArrowDown />
            </div>

            {/* Row 5 */}
            <div className="col-start-1 h-20 flex justify-end items-center pr-4">
              <LabelPill>Complexity</LabelPill>
            </div>
            <div className="col-start-3 h-20 py-2">
              <NormalBox>
                <span>Summarize,<br/>proofread, rewrite...</span>
              </NormalBox>
            </div>
            <div className="col-start-4 h-20">
              <ArrowRight />
            </div>
            <div className="col-start-5 h-20 py-2">
              <NormalBox>
                <span>Requires<br/>domain knowledge...</span>
              </NormalBox>
            </div>

            {/* Row 6 */}
            <div className="col-start-3 h-10">
              <ArrowDown />
            </div>

            {/* Row 7 */}
            <div className="col-start-1 h-20 flex justify-end items-center pr-4">
              <LabelPill>Context Window</LabelPill>
            </div>
            <div className="col-start-3 h-20 py-2">
              <NormalBox>
                <span>Short input and<br/>output</span>
              </NormalBox>
            </div>
            <div className="col-start-4 h-20">
              <ArrowRight />
            </div>
            <div className="col-start-5 h-20 py-2">
              <NormalBox>
                <span>Extensive documents,<br/>hours of audio/video...</span>
              </NormalBox>
            </div>

            {/* Row 8 */}
            <div className="col-start-3 h-10">
              <ArrowDown />
            </div>

            {/* Row 9 */}
            <div className="col-start-3 h-20 py-2">
              <GradientBox>
                <div className="flex items-center justify-between w-full">
                  <span>On-device GenAI<br/>(Zhiyou 4.5 Pro Nano)</span>
                  <Sparkles className="text-blue-500 w-6 h-6 ml-2 shrink-0" />
                </div>
              </GradientBox>
            </div>

            {/* Bracket Arrow (Spans Row 3 to 7) */}
            <div className="col-start-6 row-start-3 row-end-8 h-full relative">
              <BracketArrow />
            </div>

            {/* Final Box (Spans Row 3 to 7) */}
            <div className="col-start-7 row-start-3 row-end-8 h-full flex items-center py-2">
              <div className="h-28 w-full">
                <GradientBox>
                  <div className="flex items-center justify-between w-full">
                    <span>Zhiyou AI SDKs<br/>(Zhiyou 4.5 Pro,<br/>Flash, Vision)</span>
                    <Sparkles className="text-blue-500 w-6 h-6 ml-2 shrink-0" />
                  </div>
                </GradientBox>
              </div>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="h-24 w-full border-b-2 border-dashed border-gray-200 my-12 relative max-w-5xl">
             <div className="absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 bg-white px-6 text-blue-500 text-sm font-bold tracking-widest uppercase flex items-center gap-3">
                <Sparkles className="w-4 h-4" />
                Development Phase
                <Sparkles className="w-4 h-4" />
             </div>
          </div>

          {/* DIAGRAM 2: MODEL CREATION PROCESS */}
          <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-10 tracking-tight">Zhiyou 4.5 Pro Model Creation Process</h2>
          <div className="grid grid-cols-[10rem_2rem_14rem_3rem_16rem_4rem_16rem] gap-y-0 items-center w-full">
            
            {/* Row 1 */}
            <div className="col-start-3 h-20 py-2">
              <GradientBox>
                <span className="animate-pulse">Zhiyou 4.5 Pro Training Pipeline</span>
              </GradientBox>
            </div>

            {/* Row 2 */}
            <div className="col-start-3 h-10">
              <ArrowDown />
            </div>

            {/* Row 3 */}
            <div className="col-start-1 h-20 flex justify-end items-center pr-4">
              <LabelPill>Data Pipeline</LabelPill>
            </div>
            <div className="col-start-3 h-20 py-2">
              <NormalBox>
                <span>Massive Multilingual Text<br/>& Multimodal Data</span>
              </NormalBox>
            </div>
            <div className="col-start-4 h-20">
              <ArrowRight />
            </div>
            <div className="col-start-5 h-20 py-2">
              <NormalBox>
                <span>Data Filtering, Deduplication<br/>& Tokenization</span>
              </NormalBox>
            </div>

            {/* Row 4 */}
            <div className="col-start-3 h-10">
              <ArrowDown />
            </div>

            {/* Row 5 */}
            <div className="col-start-1 h-20 flex justify-end items-center pr-4">
              <LabelPill>Core Training</LabelPill>
            </div>
            <div className="col-start-3 h-20 py-2">
              <NormalBox>
                <span>Distributed Pre-training<br/>on TPU/GPU Clusters</span>
              </NormalBox>
            </div>
            <div className="col-start-4 h-20">
              <ArrowRight />
            </div>
            <div className="col-start-5 h-20 py-2">
              <NormalBox>
                <span>Instruction Tuning<br/>& RLHF for Alignment</span>
              </NormalBox>
            </div>

            {/* Row 6 */}
            <div className="col-start-3 h-10">
              <ArrowDown />
            </div>

            {/* Row 7 */}
            <div className="col-start-1 h-20 flex justify-end items-center pr-4">
              <LabelPill>Optimization</LabelPill>
            </div>
            <div className="col-start-3 h-20 py-2">
              <NormalBox>
                <span>Safety Guardrails<br/>& Bias Mitigation</span>
              </NormalBox>
            </div>
            <div className="col-start-4 h-20">
              <ArrowRight />
            </div>
            <div className="col-start-5 h-20 py-2">
              <NormalBox>
                <span>Model Quantization<br/>& Context Scaling</span>
              </NormalBox>
            </div>

            {/* Row 8 */}
            <div className="col-start-3 h-10">
              <ArrowDown />
            </div>

            {/* Row 9 */}
            <div className="col-start-3 h-20 py-2">
              <GradientBox>
                <div className="flex items-center justify-between w-full">
                  <span>Zhiyou 4.5 Pro Nano<br/>(Edge Optimized)</span>
                  <Sparkles className="text-blue-500 w-6 h-6 ml-2 shrink-0" />
                </div>
              </GradientBox>
            </div>

            {/* Bracket Arrow (Spans Row 3 to 7) */}
            <div className="col-start-6 row-start-3 row-end-8 h-full relative">
              <BracketArrow />
            </div>

            {/* Final Box (Spans Row 3 to 7) */}
            <div className="col-start-7 row-start-3 row-end-8 h-full flex items-center py-2">
              <div className="h-28 w-full">
                <GradientBox>
                  <div className="flex items-center justify-between w-full">
                    <span>Zhiyou 4.5 Pro Models<br/>(Cloud & API Ready)</span>
                    <Sparkles className="text-blue-500 w-6 h-6 ml-2 shrink-0" />
                  </div>
                </GradientBox>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
