import { Breadcrumbs } from "@material-tailwind/react";

export default function MyBreadcrumbs() {
  return (
    <Breadcrumbs fullWidth>
      <a href="#" className="text-sm">
        First Link
      </a>
      <a href="#" className="text-sm">
        Second Link
      </a>
      <a href="#" className="text-sm">
        Third Link
      </a>
      <a href="#" className="text-sm">
        Fourth Link
      </a>
    </Breadcrumbs>
  );
}
