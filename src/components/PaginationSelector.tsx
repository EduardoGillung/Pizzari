import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";

type Props = {
    page: number;
    pages: number;
    onPageChange: ( page: number ) => void;
};

const PaginationSelector = ({ page, pages, onPageChange }: Props) => {
    const pageNumbers = [];
    // pages = 3
    // pageNumbers = [1, 2, 3]
    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination  className="font-redHat text-PrimaryGrey ">
            <PaginationContent >
                {page !== 1 && (
                <PaginationItem >
                    <PaginationPrevious 
                        href='#' 
                        onClick={() => onPageChange(page - 1)} 
                    />
                </PaginationItem>
                )}
                
                {pageNumbers.map((number)=> (
                    <PaginationItem>
                        <PaginationLink 
                            href="#" 
                            onClick={() => onPageChange(number)} 
                            isActive={page === number}
                        >
                            {number}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                {/* pageNumbers = [1, 2, 3]
                    page = 3
                    checks if the page is equals to 3
                */}
                {page !== pageNumbers.length && (
                    <PaginationItem>
                        <PaginationNext href="#" onClick={() => onPageChange(page + 1)} />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationSelector;