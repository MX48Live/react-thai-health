import './SectionNameDivider.scss'

function SectionNameDivider({ name }: any) {
  return (
    <div className="section-name-divider-container">
      <span className="name">{ name }</span>
      <span className="line"></span>
    </div>
  )
}

export default SectionNameDivider