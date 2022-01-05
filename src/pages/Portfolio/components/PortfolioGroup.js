import PropTypes from 'prop-types';
import Project from './Project';
import { PortfolioGroupContainer, ProjectListContainer } from './styles';

import moveIt from '../../../assets/images/move-it-project.png';

function PortfolioGroup({ title, items }) {

  return (
    <PortfolioGroupContainer>

      <header id="portfolio-group-header">
        <h2>{title}</h2>
      </header>

      <ProjectListContainer>

        { items && items.map((item) => <Project item={item} />) }
      </ProjectListContainer>
    </PortfolioGroupContainer>
  );
}

PortfolioGroup.defaultProps = {
  items: [
    {
      title: 'Project',
      description: 'just a brief description of my incredible project, lorem ipsum silor domor amet lorem ipsum lorem ipsum',
      techs: ['HTML', 'CSS', 'Javascript', 'React', 'Git', 'Bash'],
      image: moveIt,
    },
    {
      title: 'Project',
      description: 'brief description',
      techs: ['HTML', 'CSS', 'Javascript'],
      image: moveIt,
    },
    {
      title: 'Project',
      description: 'just a brief description of my incredible project, lorem ipsum silor domor amet lorem ipsum lorem ipsum',
      techs: ['HTML', 'CSS', 'Javascript', 'React', 'Git', 'Bash'],
      image: moveIt,
    },
    {
      title: 'Project',
      description: 'brief description',
      techs: ['HTML', 'CSS', 'Javascript'],
      image: moveIt,
    },
    {
      title: 'Project',
      description: 'brief description',
      techs: ['HTML', 'CSS', 'Javascript'],
      image: moveIt,
    },
  ],
};

PortfolioGroup.propTypes = {

  title: PropTypes.string.isRequired,
  items: PropTypes.shape(),
};

export default PortfolioGroup;
