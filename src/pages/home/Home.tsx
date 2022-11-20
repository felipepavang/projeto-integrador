import React from "react";
import HighlightMovie from "../../components/HighlightMovie/HighlightMovie";
import { ScreenContainer } from "./styles";

const HomeScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <HighlightMovie
        movieId={"ke8X3SE0XE8"}
        title={"Titulo"}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos porro tempore ea, ipsum laboriosam nam accusantium corporis illum magnam rem rerum repudiandae debitis id itaque libero praesentium quod eveniet modi eum pariatur esse maxime veniam omnis. Accusamus ipsum fuga eius iste ex consectetur id atque fugiat adipisci assumenda aspernatur odit facere possimus, eaque perspiciatis vel nihil explicabo suscipit. Repellendus vitae accusantium quaerat modi, a blanditiis sint voluptates eum esse nisi. Facere recusandae reprehenderit ducimus vero sed laudantium delectus a sequi! Impedit corporis ipsum cupiditate iusto aut dignissimos. Autem possimus odit provident ipsam deserunt maiores explicabo deleniti facilis? Architecto voluptatibus unde, inventore libero omnis amet illum distinctio neque aliquid perferendis quis voluptatum odit ad nemo? Earum neque incidunt ducimus cum, sit dolores laborum fuga consectetur fugit sequi veniam esse tenetur numquam sunt ratione, quos itaque ullam fugiat suscipit qui! Repellendus delectus corrupti nulla incidunt iste mollitia, nam reiciendis officia et magni placeat amet ex. Aperiam saepe deserunt repellendus, in ipsam nulla, praesentium eligendi autem ut sed nobis minus cupiditate veniam dicta neque eum accusantium obcaecati delectus quam. Adipisci repellendus obcaecati odio aut, perspiciatis praesentium doloremque unde vitae laudantium hic. Itaque, recusandae quasi! Accusantium quos ut quaerat maiores reiciendis nostrum corporis veniam."
        }
        releaseYear={"2021"}
        category={"Drama"}
        director={"Felipe"}
      />
    </ScreenContainer>
  );
};

export default HomeScreen;
