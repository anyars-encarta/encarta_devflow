import UserCard from "@/components/cards/UserCard";
import DataRenderer from "@/components/DataRenderer";
import LocalSearch from "@/components/search/LocalSearch";
import ROUTES from "@/constants/routes";
import { EMPTY_USERS } from "@/constants/states";
import { getUsers } from "@/lib/actions/user.action";
import { RouteParams } from "@/types/global";

const Community = async ({ searchParams }: RouteParams) => {
  const { page, pageSize, query, filter } = await searchParams;

  const { success, data, error } = await getUsers({
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 10,
    query,
    filter,
  });

  const { users } = data || {};

  return (
    <div className="pt-10 text-white">
      <h1 className="h1-bold text-dark100_light900">All Users</h1>

      <div className="mt-11">
        <LocalSearch
          route={ROUTES.COMMUNITY}
          iconPosition="left"
          imgSrc="/icons/search.svg"
          placeholder="There are some great dev here. Find them..."
          otherClasses="flex-1"
        />
      </div>

      <DataRenderer
        success={success}
        data={users}
        error={error}
        empty={EMPTY_USERS}
        render={(users) => (
          <div className="mt-12 flex flex-wrap gap-5">
            {users.map((user) => (
              <UserCard key={user.name} {...user} />
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default Community;
