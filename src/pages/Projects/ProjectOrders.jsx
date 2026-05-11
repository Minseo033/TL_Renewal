import { useState } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import AnimatedSection from '../../components/ui/AnimatedSection';
import { RECENT_PROJECTS } from '../../data/projectsData';
import { Calendar, Building, MapPin, X, Plus } from 'lucide-react';
import './Projects.css';

const SUB_NAV = [
  { label: '공사수주 현황', path: '/projects/orders' },
  { label: '주택', path: '/projects/housing' },
  { label: '업무시설', path: '/projects/office' },
  { label: '교육/의료', path: '/projects/education' },
  { label: '플랜트', path: '/projects/plant' },
  { label: '초고층', path: '/projects/highrise' },
  { label: '판매시설', path: '/projects/retail' },
  { label: '기타', path: '/projects/others' },
];

const STATS = [
  { label: '철근콘크리트공사 도급순위', value: '55위', sub: '철근콘크리트공사' },
  { label: '철근콘크리트공사 시공능력평가액', value: '978억', sub: '철근콘크리트공사' },
  { label: '동종업계 순위', value: '61위', sub: '동종업계' },
  { label: '2025년 매출액', value: '840억', sub: '2025년' },
];

export default function ProjectOrders() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, RECENT_PROJECTS.length));
  };

  const closeModal = () => setSelectedProject(null);

  return (
    <PageLayout
      title="사업실적"
      breadcrumb={[{ label: '사업실적', path: '/projects/orders' }, { label: '공사수주 현황' }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">CONSTRUCTION ORDERS</p>
        <h2 className="section-title">공사수주 현황</h2>
        <p className="section-subtitle">
          태일씨앤티가 수행해 온 주요 공사 수주 현황입니다. (등록 {RECENT_PROJECTS.length}건)
        </p>
      </AnimatedSection>

      <div className="order-stats-grid">
        {STATS.map((s, i) => (
          <AnimatedSection key={i} delay={i * 80} direction="up">
            <div className="order-stat-card">
              <p className="order-stat-label">{s.label}</p>
              <p className="order-stat-value">{s.value}</p>
              <p className="order-stat-sub">{s.sub}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <div className="projects-grid">
        {RECENT_PROJECTS.slice(0, visibleCount).map((project, i) => (
          <AnimatedSection key={`${project.id}-${i}`} delay={(i % 12) * 50} direction="up">
            <div className="project-card" onClick={() => setSelectedProject(project)}>
              <div className="project-card-image">
                <img src={project.image} alt={project.name} onError={(e) => {
                  e.target.src = './assets/images/company/greeting.jpg';
                }} />
                <div className="project-card-overlay">
                  <span className="view-detail-btn">상세보기 +</span>
                </div>
              </div>
              <div className="project-card-info">
                <h3 className="project-card-name">{project.name}</h3>
                <div className="project-card-meta">
                  <div className="meta-item">
                    <Building size={14} className="meta-icon" />
                    <span>{project.client}</span>
                  </div>
                  {project.period && (
                    <div className="meta-item">
                      <Calendar size={14} className="meta-icon" />
                      <span>{project.period}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {visibleCount < RECENT_PROJECTS.length && (
        <div className="load-more-wrap">
          <button className="btn btn-outline btn-lg load-more-btn" onClick={loadMore}>
            <Plus size={20} /> 더 많은 프로젝트 보기
          </button>
        </div>
      )}

      {/* --- Detail Modal --- */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <X size={24} />
            </button>
            <div className="modal-body">
              <div className="modal-image-wrap">
                <img src={selectedProject.image} alt={selectedProject.name} onError={(e) => {
                  e.target.src = './assets/images/company/greeting.jpg';
                }} />
              </div>
              <div className="modal-info-wrap">
                <p className="modal-eyebrow">PROJECT DETAILS</p>
                <h2 className="modal-title">{selectedProject.name}</h2>
                
                <div className="modal-details-grid">
                  <DetailItem label="유형" value={selectedProject.type} />
                  <DetailItem label="주소" value={selectedProject.address} icon={<MapPin size={16} />} />
                  <DetailItem label="발주처 / 자" value={selectedProject.client} icon={<Building size={16} />} />
                  <DetailItem label="시공사" value={selectedProject.partner} />
                  <DetailItem label="규모" value={selectedProject.scale} />
                  <DetailItem label="공사기간" value={selectedProject.period} icon={<Calendar size={16} />} />
                  <DetailItem label="공법" value={selectedProject.method} />
                  <DetailItem label="공사범위" value={selectedProject.scope} />
                  <DetailItem label="시공자재" value={selectedProject.material} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}

function DetailItem({ label, value, icon }) {
  if (!value || value === '.') return null;
  return (
    <div className="modal-detail-item">
      <div className="detail-label">
        <span className="label-text">{label}</span>
      </div>
      <div className="detail-value">
        {icon && <span className="value-icon">{icon}</span>}
        <span className="value-text">{value}</span>
      </div>
    </div>
  );
}
