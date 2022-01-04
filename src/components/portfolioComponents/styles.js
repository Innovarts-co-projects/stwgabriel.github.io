import styled from 'styled-components';

const PortfolioGroupContainer = styled.div`
  > header {
    margin: 5vh 0 4vh;
    
    h2 {
      font-family: "ProDisplay", -apple-system, BlinkMacSystemFont, Tahoma, Arial Black,Verdana, Helvetica, Montserrat, sans-serif;
      font-weight: 600;
      font-size: 1.6vw;
    }
  }
`;

const ProjectListContainer = styled.div`
  display: flex;
`;

const ProjectContainer = styled.div`
  border: .15vw solid ${({ theme }) => theme.color.main.fadeTextColor};
  border-radius: ${({ theme }) => theme.metric.borderRadius};
  font-family: 'Montserrat', sans-serif;

  position: relative;

  width: 21vw;
  height: 20vw;

  margin-right: 2vw;

  overflow: hidden;

  .main-image {
    width: 100%;
    height: 100%;
    position: relative;

    img {
      border-radius: ${({ theme }) => theme.metric.borderRadius};

      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .overlay {
    background: rgba(0, 0, 0, .5);
    border-radius: ${({ theme }) => theme.metric.borderRadius};

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .info {
    background: ${({ theme }) => theme.color.main.reverseAccent};
    border-top: .15vw solid ${({ theme }) => theme.color.main.fadeTextColor};
    border-radius: ${({ theme }) => theme.metric.borderRadius};

    position: absolute;
    top: 100%;
    left: 0;
    transform: translateY(-90%); // -34.2 -90

    width: 100%;
    height: 100%;

    padding: 1.2vw;
    margin-top: -.15vw;

    header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    h3 {
      font-size: 1.2vw;
      font-weight: 600;
      margin-bottom: .8vw;
    }

    .icon {
      background: none;
      border: 0;
      border-radius: ${({ theme }) => theme.metric.borderRadius};

      display: flex;

      padding: .8vw 1vw;
      margin: -.5vw 0 .5vw;

      transition: background .25s ease-in;

      img {
        transform: rotateX(180deg); // 0 to turn it the other way
        transition: transform .25s ease-in;
        margin: auto;
      }

      &:hover {
        background: ${({ theme }) => theme.color.main.selection};

        img {
          transform: rotateX(0);
        }
      }
    }

    .description {
      width: 100%;
      height: 2.2vw;
      color: ${({ theme }) => theme.color.main.fadeTextColor};

      font-size: .9vw;

      margin-bottom: 1.6vh;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .tech-container {
      h3 {
        margin-bottom: .8vw;
      }

      .techs {
        display: flex;
        flex-wrap: wrap;

        font-size: .82vw;
      }
    }


    .see-project-button {
      display: flex;
      justify-content: center;

      button {
        background: ${({ theme }) => theme.color.main.selection};
        border-radius: ${({ theme }) => theme.metric.borderRadius};
        color: ${({ theme }) => theme.color.main.fadeTextColor};
  
        font-size: 1vw;
        padding: .6vw 1.3vw;
      }
    }

  }
`;

const TechContainer = styled.div`
  background: ${({ theme }) => theme.color.main.selection};
  border-radius: ${({ theme }) => theme.metric.borderRadius};

  color: ${({ theme }) => theme.color.main.fadeTextColor};

  padding: .5vw .8vw;
  margin: 0 .6vw .6vw 0;
`;

export {
  ProjectContainer, ProjectListContainer, PortfolioGroupContainer, TechContainer,
};
