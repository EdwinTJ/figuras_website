import React from "react";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink
} from "mdb-react-ui-kit";
export default function Pagination({ currentPage, total, pageSize, onChange }) {
  return (
    <MDBPagination center circle className="mb-0">
      <MDBPaginationItem>
        <MDBPaginationLink href="#" tabIndex={-1} aria-disabled="true">
          Previous
        </MDBPaginationLink>
      </MDBPaginationItem>
      {Array.from(Array(Math.ceil(total / pageSize)), (e, i) => i + 1).map(
        page => (
          <MDBPaginationItem active={page === currentPage} key={page}>
            <MDBPaginationLink onClick={() => onChange(page)}>
              {page}
            </MDBPaginationLink>
          </MDBPaginationItem>
        )
      )}
      <MDBPaginationItem>
        <MDBPaginationLink href="#">Next</MDBPaginationLink>
      </MDBPaginationItem>
    </MDBPagination>
  );
}
