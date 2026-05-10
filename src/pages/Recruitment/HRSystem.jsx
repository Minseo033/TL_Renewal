import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { 
  BarChart3, Users, MessageSquare, Lightbulb, 
  TrendingUp, UserCheck, Plus, Equal, Award, Coins, ShieldCheck 
} from 'lucide-react';
import './Recruitment.css';

const SUB_NAV = [
  { label: '인사제도', path: '/recruitment/system' },
  { label: '복리후생', path: '/recruitment/benefits' },
  { label: '채용가이드', path: '/recruitment/guide' },
  { label: '채용공고', path: '/recruitment/jobs' },
  { label: '채용FAQ', path: '/recruitment/faq' },
];

export default function HRSystem() {
  return (
    <PageLayout
      title="인재채용"
      breadcrumb={[{ label: '인재채용', path: '/recruitment/jobs' }, { label: '인사제도' }]}
      subNav={SUB_NAV}
    >
      <div className="hr-system-container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="section-eyebrow">HUMAN RESOURCES</p>
            <h2 className="section-title">인재상</h2>
            <p className="section-subtitle">사람의 가치를 세우고, 함께 나아갈 내일을 건설합니다.</p>
          </div>
        </AnimatedSection>

        {/* 1. 인재상 섹션 */}
        <div className="hr-section-row">
          <div className="hr-sticky-title">
            <div className="side-bar"></div>
            <h3>Core<br />Values</h3>
            <span className="side-eng">우리가 찾는 인재</span>
          </div>
          
          <div className="hr-content-grid">
            <div className="hr-value-card">
              <div className="hr-card-icon"><BarChart3 size={24} /></div>
              <strong>책임과 성장</strong>
              <p>책임과 배움을 반복하며 성장한다.</p>
            </div>
            <div className="hr-value-card">
              <div className="hr-card-icon"><MessageSquare size={24} /></div>
              <strong>정직과 소통</strong>
              <p>원칙에 따라 정직하게 소통하며 신뢰를 만든다.</p>
            </div>
            <div className="hr-value-card">
              <div className="hr-card-icon"><Users size={24} /></div>
              <strong>공동체 의식</strong>
              <p>공동체를 강화하여 함께 어려움을 극복한다.</p>
            </div>
            <div className="hr-value-card">
              <div className="hr-card-icon"><Lightbulb size={24} /></div>
              <strong>더 나은 방식</strong>
              <p>관심있게 관찰하고 더 나은 방식을 찾는다.</p>
            </div>
          </div>
        </div>

        {/* 2. 평가제도 섹션 */}
        <div className="hr-section-row">
          <div className="hr-sticky-title">
            <div className="side-bar"></div>
            <h3>Evaluation</h3>
            <span className="side-eng">공정한 성과 관리</span>
          </div>

          <div className="hr-system-panel">
            <div className="system-node">
              <div className="node-circle"><TrendingUp size={32} /></div>
              <strong>업적평가</strong>
            </div>
            <Plus size={20} color="#cbd5e1" />
            <div className="system-node">
              <div className="node-circle"><UserCheck size={32} /></div>
              <strong>역량평가</strong>
            </div>
            <Equal size={20} color="#cbd5e1" />
            <div className="result-box-dark">
              <strong>평가결과 활용</strong>
              <ul>
                <li>• 보상 : 평가결과 연계 보상 차등</li>
                <li>• 승진 : 투명한 반영 및 우수 인재 선발</li>
                <li>• 육성 : 피드백 및 역량 개발 지원</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. 보상제도 섹션 */}
        <div className="hr-section-row">
          <div className="hr-sticky-title">
            <div className="side-bar"></div>
            <h3>Rewards</h3>
            <span className="side-eng">최고의 대우와 보상</span>
          </div>

          <div className="hr-system-panel">
            <div className="system-node">
              <div className="node-circle"><Coins size={32} /></div>
              <strong>기본급</strong>
              <p style={{fontSize:'12px', color:'#94a3b8'}}>직급별 호봉제</p>
            </div>
            <Plus size={20} color="#cbd5e1" />
            <div className="system-node">
              <div className="node-circle"><ShieldCheck size={32} /></div>
              <strong>각종 수당</strong>
              <p style={{fontSize:'12px', color:'#94a3b8'}}>현장수당, 자격증수당, 특근수당, 기타 수당 등</p>
            </div>
            <Plus size={20} color="#cbd5e1" />
            <div className="system-node">
              <div className="node-circle" style={{background:'#63b155', color:'#fff'}}><TrendingUp size={32} /></div>
              <strong>인센티브</strong>
              <p style={{fontSize:'12px', color:'#94a3b8'}}>성과 기반 보상</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}