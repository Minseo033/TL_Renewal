import { useEffect, useState } from 'react';
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

export default function ProjectCategory({ category }) {
  const filteredProjects = RECENT_PROJECTS.filter(p => 
    p.categories && p.categories.includes(category)
  );

  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, filteredProjects.length));
  };

  const closeModal = () => setSelectedProject(null);

  // Force scroll to top when category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [selectedProject]);

  return (
    <PageLayout
      title="사업실적"
      breadcrumb={[{ label: '사업실적', path: '/projects/orders' }, { label: category }]}
      subNav={SUB_NAV}
    >
      <AnimatedSection>
        <p className="section-eyebrow">PROJECT PORTFOLIO</p>
        <h2 className="section-title">{category} 실적</h2>
        <p className="section-subtitle project-category-subtitle">
          대한민국 건설의 미래를 여는 태일씨앤티의 {category} 분야 주요 시공 실적입니다. (총 {filteredProjects.length}건)
        </p>
      </AnimatedSection>

      <div className="projects-grid project-category-grid">
        {filteredProjects.slice(0, visibleCount).map((project, i) => (
          <AnimatedSection key={`${project.id}-${category}-${i}`} delay={(i % 6) * 50} direction="up">
            <div className="project-card" onClick={() => setSelectedProject(project)}>
              <div className="project-card-image">
                <img src={project.image} alt={project.name} onError={(e) => {
                  e.target.src = './assets/images/company/greeting.jpg';
                }} />
                {project.status && project.status !== '.' && (
                  <span className={`project-status-badge ${project.status === '진행' ? 'is-active' : ''}`}>
                    {project.status}
                  </span>
                )}
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

      {visibleCount < filteredProjects.length && (
        <div className="load-more-wrap">
          <button className="btn btn-outline btn-lg load-more-btn" onClick={loadMore}>
            <Plus size={20} /> 더 많은 실적 보기
          </button>
        </div>
      )}

      {filteredProjects.length === 0 && (
        <div className="no-data-wrap">
          <p>해당 카테고리에 등록된 실적이 없습니다.</p>
        </div>
      )}

      {/* --- Detail Modal --- */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal} aria-label="프로젝트 상세 닫기">
              <X size={24} />
            </button>
            <div className="modal-body">
              <div className="modal-image-wrap">
                <img src={selectedProject.image} alt={selectedProject.name} onError={(e) => {
                  e.target.src = './assets/images/company/greeting.jpg';
                }} />
              </div>
              <div className="modal-info-wrap">
                <p className="modal-eyebrow">{category.toUpperCase()} DETAILS</p>
                <h2 className="modal-title">{selectedProject.name}</h2>
                
                <div className="modal-details-grid">
                  <DetailItem label="진행상태" value={selectedProject.status} />
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
